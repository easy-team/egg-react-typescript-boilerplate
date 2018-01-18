import { Controller } from 'egg';
import * as Model from '../../mocks/article/list';
export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.render('home/home.js', Model.getPage(1, 10));
  }

  public async client() {
    const { ctx } = this;
    await ctx.renderClient('home/home.js', Model.getPage(1, 10));
  }

  public async element() {
    const { ctx } = this;
    ctx.render('element/element.js', Model.getPage(1, 10));
  }

  public async pager() {
    const { ctx } = this;
    const pageIndex = ctx.query.pageIndex;
    const pageSize = ctx.query.pageSize;
    ctx.body = Model.getPage(pageIndex, pageSize);
  }
}