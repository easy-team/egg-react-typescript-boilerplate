// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root'

class Example extends Component {

  render() {
    const styleTitle = {
      marginTop: '40px', marginBottom: '40px', textAlign: 'center'
    };
    const styleSub = {
      marginBottom: '40px', textAlign: 'center', color: '444444'
    };
    return <div>
      <h2 style={{...styleTitle}}>Egg React Server Side Render</h2>
      <h4 style={{...styleSub}}><a target="_blank" href="/demo/node">Node 直接获取数据</a></h4>
      <h4 style={{...styleSub}}><a target="_blank" href="/demo/async">前端 asyncData 获取数据</a></h4>
      <h4 style={{...styleSub}}><a target="_blank" href="/antd">AntD + Mobx</a></h4>

    </div>;
  }
}

export default EASY_ENV_IS_DEV ? hot(Example) : Example

