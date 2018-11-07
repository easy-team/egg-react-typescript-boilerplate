'use strict';
// https://www.yuque.com/easy-team/egg-react/config
const path = require('path');
const resolve = (filepath) => path.resolve(__dirname, filepath);
module.exports = {
  devtool: 'eval',
  entry: {
    home: 'app/web/page/home/index.jsx' // 注意 entry js 和 jsx 的区别 https://www.yuque.com/easy-team/egg-react/config
  },
  lib: ['react', 'react-dom'],
  loaders: {
    babel: {
      include: [resolve('app/web'), resolve('node_modules')]
    },
    less: {
      include: [resolve('app/web'), resolve('node_modules')],
      options: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': 'red',
          'link-color': '#1DA57A',
          'border-radius-base': '2px'
        }
      }
    }
  },
  plugins: {
    imagemini: false
  },
  done() {
    console.log('---webpack compile finish---');
  }
};