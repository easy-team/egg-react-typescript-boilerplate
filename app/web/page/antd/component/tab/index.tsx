import React, { Component } from 'react';
import { Tabs } from 'antd';
import Header from '../../../../component/header';
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
          <TabPane tab="MobX" key="1"><MobXApp /></TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    </div>;
  }
}