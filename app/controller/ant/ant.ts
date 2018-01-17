'use strict';
import { Controller } from "egg";
export default class TabController extends Controller {
  async tab() {
    const { ctx } = this;
    await ctx.render('ant/tab/tab.js', {
      title:'--ant design server side render--',
      keywords:'react, server side render, ant design',
      message: { text: 'react ant design server side render demo!'}});
  }
};