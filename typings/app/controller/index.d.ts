// This file is created by egg-ts-helper@1.35.1
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportAntd from '../../../app/controller/antd';
import ExportBlog from '../../../app/controller/blog';
import ExportDemo from '../../../app/controller/demo';

declare module 'egg' {
  interface IController {
    antd: ExportAntd;
    blog: ExportBlog;
    demo: ExportDemo;
  }
}
