import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('config')
export default class Layout extends Component<any> {
  render() {
    const { config } = this.props;
    console.log('>>themeStyle', config.themeStyle);
    return <html>
      <head>
        <title>{this.props.title}</title>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"></meta>
        <meta name="keywords" content={this.props.keywords}></meta>
        <meta name="description" content={this.props.description}></meta>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
      </head>
      <body style={{...config.themeStyle}}><div id="app">{this.props.children}</div></body>
    </html>;
  }
}