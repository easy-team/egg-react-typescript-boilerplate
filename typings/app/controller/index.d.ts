// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import AboutAbout from '../../../app/controller/about/about';
import AntAnt from '../../../app/controller/ant/ant';
import AppApp from '../../../app/controller/app/app';
import CssCss from '../../../app/controller/css/css';
import HelloHello from '../../../app/controller/hello/hello';
import HomeHome from '../../../app/controller/home/home';
import RouterRouter from '../../../app/controller/router/router';
import SpaSpa from '../../../app/controller/spa/spa';
import TestTest from '../../../app/controller/test/test';

declare module 'egg' {
  interface IController {
    about: {
      about: AboutAbout;
    };
    ant: {
      ant: AntAnt;
    };
    app: {
      app: AppApp;
    };
    css: {
      css: CssCss;
    };
    hello: {
      hello: HelloHello;
    };
    home: {
      home: HomeHome;
    };
    router: {
      router: RouterRouter;
    };
    spa: {
      spa: SpaSpa;
    };
    test: {
      test: TestTest;
    };
  }
}
