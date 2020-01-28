
import { Context } from 'egg';

export default function locale() : any {
  return async (ctx: Context, next: () => Promise<any>) => {
    ctx.locals.locale = ctx.query.locale || 'cn';
    ctx.locals.origin = ctx.request.origin;
    await next();
  };
};