'use strict';

import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root'

class NodeMode extends Component<any, any> {
  render() {
    const { title, article } = this.props;
    return article ? <div>
      <h1 className="easy-article-detail-title">{title}</h1>
      <h3 className="easy-article-detail-title">{article.title}</h3>
      <div className="easy-article-info">
        <iframe src={article.url} frameBorder="0" width="100%" style={{minHeight: '800px'}}></iframe>
      </div>
    </div> : null;
  }
}

export default EASY_ENV_IS_DEV ? hot(NodeMode) : NodeMode;
