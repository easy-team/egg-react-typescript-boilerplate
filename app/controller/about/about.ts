import { Controller } from 'egg';

export default class AboutController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.render('about/about.js', { message: 'react server side render!' });
  }
}