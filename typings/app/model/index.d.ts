// This file is created by egg-ts-helper@1.35.1
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportArticle from '../../../app/model/article';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
  }
}
