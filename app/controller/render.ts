import { Controller } from 'egg';
export default class ReactController extends Controller {
  public async reactNunjucksRender() {
    const { ctx } = this;
    await ctx.render('react-nunjucks-render.tpl', { 
      title: 'Nunjucks Render',
      data: JSON.stringify({ text: '基于 Egg + React + Nunjucks + TypeScript + Mobx + Webpack Client Side Render' }) 
    });
  }

  public async reactServerRender() {
    const { ctx } = this;
    await ctx.render('react-server-render.js', { 
      title: 'React Server Render',
      text: 'Egg + React + TypeScript + Webpack Server Side Render' 
    });
  }

  public async reactClientRender() {
    const { ctx } = this;
    await ctx.renderClient('react-client-render.js', { 
      title: 'React Client Render',
      text: 'Egg + React + TypeScript + Webpack Client Side Render' 
    });
  }
}