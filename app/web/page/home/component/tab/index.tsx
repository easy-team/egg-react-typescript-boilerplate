import React, { Component } from 'react';
import { Tabs } from 'antd';
import Header from '../../../../component/header/header';
import { TabProps } from '../../../../typings/type';
import './index.css';

import MobXApp from '../mobx';


const TabPane = Tabs.TabPane;
const tabItemClick = (key) => {
  console.log('tab click', key);
};
// https://github.com/gaearon/react-hot-loader/issues/525
// must export, not export default
export class Tab extends Component<TabProps, any> {
  render() {
    return <div>
      <Header></Header>
      <div className="tab">
        <h1>{this.props.message.text}</h1>
        <Tabs defaultActiveKey="1" onChange={tabItemClick}>
          <TabPane tab="Awesome Render" key="1">
            <h1><a href="/ssr">React Server Render</a></h1>
            <h1><a href="/csr">React Client Render</a></h1>
            <h1><a href="/nun">React Nunjucks Render</a></h1>
          </TabPane>
          <TabPane tab="Mobx-React" key="2"><MobXApp /></TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    </div>;
  }
}