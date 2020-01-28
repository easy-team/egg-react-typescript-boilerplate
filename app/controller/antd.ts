import { Controller } from 'egg';
export default class AntDController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.render('antd.js', {
      title: '--Ant Design Tab--',
      keywords: 'react, server side render, ant design',
      message: { text: 'Ant Design Tab Theme and Code Spliting' }
    });
  }
}