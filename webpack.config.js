'use strict';
// https://www.yuque.com/easy-team/egg-react/config
module.exports = {
  devtool: 'eval',
  entry: {
    home: 'app/web/page/home/index.js' // 注意 entry js 和 jsx 的区别 https://www.yuque.com/easy-team/egg-react/config
  },
  dll: ['react', 'react-dom'],
  loaders: {
    typescript: true
  },
  plugins: {
    imagemini: false
  },
  done() {
    console.log('---webpack compile finish---');
  }
};
