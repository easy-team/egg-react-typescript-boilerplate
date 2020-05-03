import { Controller, Context } from 'egg';
import { deserialize } from '@hubcarl/json-typescript-mapper';
import Condition from '../lib/condition';

export default class BlogController extends Controller {

  public async home(ctx: Context) {
    await ctx.render('blog.js', { url: ctx.url });
  }

  public async list(ctx: Context) {
    const condition = deserialize(Condition, ctx.request.body);
    ctx.body = await ctx.service.article.getArtilceList(condition);
  }

  public async detail(ctx: Context) {
    const { id } = ctx.params;
    const article = await ctx.service.article.query({ id: Number(id) });
    ctx.body = { article };
  }
}