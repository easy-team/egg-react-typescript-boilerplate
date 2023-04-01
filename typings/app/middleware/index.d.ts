// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportAccess from '../../../app/middleware/access';
import ExportLocals from '../../../app/middleware/locals';

declare module 'egg' {
  interface IMiddleware {
    access: typeof ExportAccess;
    locals: typeof ExportLocals;
  }
}
