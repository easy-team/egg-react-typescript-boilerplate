import AboutController from './controller/about/about';
import AntController from './controller/ant/ant';
import AppController from './controller/app/app';
import CssController from './controller/css/css';
import HelloController from './controller/hello/hello';
import HomeController from './controller/home/home';
import RouterController from './controller/router/router';
import SPAController from './controller/spa/spa';


declare module 'egg' {
  export interface Application {
    
  }

  export interface IController {
    about: {
      about: AboutController
    },
    ant: {
      ant: AntController
    },
    app: {
      app: AppController,
    },
    css: {
      css: CssController
    },
    hello: {
      hello: HelloController
    },
    home: {
      home: HomeController
    },
    router: {
      router: RouterController
    },
    spa: {
      spa: SPAController
    }
  }

  export interface IService {
  }

  function startCluster(options: any)
}