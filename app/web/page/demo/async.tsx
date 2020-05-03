'use strict';

import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root'

import request from '@framework/request';

class AsyncMode extends Component<any, any> {
  static async asyncData(locals) {
    return request.get(`/demo/api/article`, locals);
  }

  render() {
    const { title, article } = this.props;
    return article ? <div>
      <h1 className="easy-article-detail-title">{title}</h1>
      <h2 className="easy-article-detail-title">{article.title}</h2>
      <div className="easy-article-info">
        <iframe src={article.url} frameBorder="0" width="100%" style={{minHeight: '800px'}}></iframe>
      </div>
    </div> : null;
  }
}

export default EASY_ENV_IS_DEV ? hot(AsyncMode) : AsyncMode;
