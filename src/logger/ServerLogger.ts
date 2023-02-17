import pino, { ChildLoggerOptions } from 'pino';
import { trimPath } from '@app/utils/trimPath';
import { RequestCtx } from '@app/models/RequestCtx';

const Parent = pino({
  // Avoid adding pid, hostname properties to each log.
  // Reference: https://github.com/pinojs/pino/blob/master/docs/api.md#base-object
  base: undefined,
});

/**
 * Get logger for a given module / file.
 *
 * @param filename Filename of the source code where the logger is initiated. This helps with debugging process.
 * Note that Webpack config `node.__filename` must be `true`. See: https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
 * @param options Pino options, e.g. log redaction.
 * @returns File logger.
 */
export const fileLogger = (filename: string, options?: ChildLoggerOptions) => {
  const fileModule = trimPath(filename);
  return Parent.child({ module: fileModule }, options);
};

/**
 * Get logger for a given module / file and request.
 *
 * @param filename Filename of the source code where the logger is initiated. This helps with debugging process.
 * Note that Webpack config `node.__filename` must be `true`. See: https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
 * @param options Pino options, e.g. log redaction.
 * @returns Request logger.
 */
export const requestLogger = (
  filename: string,
  options?: ChildLoggerOptions,
) => {
  const fileModule = trimPath(filename);
  return (ctx: RequestCtx) => {
    return Parent.child(
      { module: fileModule, req: { id: ctx.requestId } },
      options,
    );
  };
};
