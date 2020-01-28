// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAntd from '../../../app/controller/antd';
import ExportBlog from '../../../app/controller/blog';

declare module 'egg' {
  interface IController {
    antd: ExportAntd;
    blog: ExportBlog;
  }
}
