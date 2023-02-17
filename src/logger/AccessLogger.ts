import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { ServerPublicError } from '@app/models/Error';
import { ChildLoggerOptions } from 'pino';
import { fileLogger } from './ServerLogger';

const GraphQlIgnoreLogPaths: string[] = [];

const buildLoggerOptions = (redactPaths: string[]): ChildLoggerOptions => ({
  redact: {
    paths: [
      ...GraphQlIgnoreLogPaths,
      ...redactPaths.map(redactPath => `req.${redactPath}`),
    ],
    remove: true,
  },
});
/**
 * Intentionally use file logger and manually add requestId when logging.
 * This would avoid the need of creating a child request logger for every request.
 */
export const withLogger = (
  handler: NextApiHandler,
  moduleName: string,
  reqBodyRedactionPaths: string[],
) => {
  const loggerOptions =
    reqBodyRedactionPaths.length > 0
      ? buildLoggerOptions(reqBodyRedactionPaths)
      : undefined;
  const Logger = fileLogger(moduleName, loggerOptions);
  return async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const startTime = Date.now();
    try {
      await handler(req, res);
    } catch (err) {
      // Handle uncaught error, to ensure that Access Log is always printed.
      if (err instanceof ServerPublicError) {
        res.status(err.httpStatus()).json({ errors: [err.toPublicError()] });
      } else {
        Logger.child({
          // Manually add reqId as the logger is a fileLogger.
          req: { id: req.ctx.requestId },
        }).error(
          // If the object is of type Error, it is wrapped in an object containing a property err ({ err: mergingObject }). This allows for a unified error handling flow.
          // Reference: https://github.com/pinojs/pino/blob/master/docs/api.md#mergingobject-object
          err,
          'Uncaught error.',
        );
        res.status(500).end();
      }
    }

    // Reference: https://vercel.com/docs/concepts/edge-network/headers#x-forwarded-for
    const client = req.headers['x-forwarded-for'] ?? '';

    const endTime = Date.now();
    const reqTime = endTime - startTime;
    Logger.info({
      req: {
        // If `req.body` path changes, update `redact.paths` on buildLoggerOptions.
        body: {
          operationName: req.body.operationName,
          query:
            req.body.operationName !== 'IntrospectionQuery'
              ? req.body.query
              : null,
          variables: req.body.variables,
        },
        client,
        id: req.ctx.requestId,
        method: req.method,

        path: req.url,

        time: reqTime,
        // sessionKey: req?.session?.session?._k,
      },
      res: {
        status: res.statusCode,
      },
    });
  };
};
