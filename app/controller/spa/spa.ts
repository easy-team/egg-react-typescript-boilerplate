import { Controller } from 'egg';
export default class SPAController extends Controller {

  async client() {
    const { ctx } = this;
    await ctx.renderClient('spa/client.js', {});
  }

  async redux() {
    const { ctx } = this;
    await ctx.renderClient('spa/redux.js', {});
  }

  async ssr() {
    const { ctx } = this;
    await ctx.render('spa/ssr.js', { url: ctx.url });
  }
};