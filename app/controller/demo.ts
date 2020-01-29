import { Controller, Context } from 'egg';

export default class DemoController extends Controller {

  public async nodeData(ctx: Context) {
    const { id = 1 } = ctx.params;
    const title = 'Node 直接获取渲染数据';
    const article = await ctx.service.article.query({ id: Number(id) });
    await ctx.render('demo/node.js', { title, article });
  }

  public async asyncData(ctx: Context) {
    const title = 'Frontend asyncData 获取渲染数据';
    await ctx.render('demo/async.js', { title });
  }

  public async article(ctx: Context) {
    const article = await ctx.service.article.query({ id: 1 });
    ctx.body = { article };
  }
}