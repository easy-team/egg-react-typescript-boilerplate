'use strict';
// https://www.yuque.com/easy-team/egg-react/config
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = (filepath) => path.resolve(__dirname, filepath);
module.exports = {
  entry: {
    home: 'app/web/page/home/index.tsx',
    'react-nunjucks-render': 'app/web/page/react-nunjucks-render/index.tsx',
    'react-server-render': 'app/web/page/react-server-render/index.tsx',
    'react-client-render': 'app/web/page/react-client-render/index.tsx'
  },
  module: {
    rules: [
      {
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
      {
        ts: true
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['runtime', 'common', 'react-nunjucks-render'],
      filename: '../app/view/react-nunjucks-render.tpl',
      template: './app/web/view/index.tpl'
    })
  ]
};