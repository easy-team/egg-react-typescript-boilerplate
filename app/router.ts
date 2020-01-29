
import { Application } from 'egg';
export default (app: Application) => {
  const { router, controller } = app;
  router.get('/demo/node', controller.demo.nodeData);
  router.get('/demo/async', controller.demo.asyncData);
  router.get('/demo/api/article', controller.demo.article);
  router.get('/antd', controller.antd.index);
  router.get('/api/blog/list', controller.blog.list);
  router.get('/api/blog/:id', controller.blog.detail);
  router.get('/(.*?)', controller.blog.home);
};
