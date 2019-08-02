// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccess from '../../../app/middleware/access';

declare module 'egg' {
  interface IMiddleware {
    access: typeof ExportAccess;
  }
}
