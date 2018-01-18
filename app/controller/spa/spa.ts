import { Controller } from 'egg';
export default class SPAController extends Controller {

  public async client() {
    const { ctx } = this;
    await ctx.renderClient('spa/client.js', {});
  }

  public async redux() {
    const { ctx } = this;
    await ctx.renderClient('spa/redux.js', {});
  }

  public async ssr() {
    const { ctx } = this;
    await ctx.render('spa/ssr.js', { url: ctx.url });
  }
}