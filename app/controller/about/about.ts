import { Controller } from "egg";

'use strict';
export default class AboutController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('about/about.js', { message: 'react server side render!' });
  }
};