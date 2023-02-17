import { RequestCtx } from '@/app/server/models/RequestCtxModel';

declare module 'http' {
  interface IncomingMessage {
    /**
     * Request context.
     */
    ctx: RequestCtx;
  }
}

export {};
