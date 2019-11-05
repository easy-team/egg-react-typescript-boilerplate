import React, { Component } from 'react';
import Layout from '../../component/layout';
import { SSR } from '../../framework/app';

// class Index extends Component {
//   componentDidMount() {
//     console.log('render');
//   }
//   render() {
//     return <Layout>
//       <h1>{this.props.text}</h1>
//     </Layout>;
//   }
// }

const Index = (props) =>{
  return <Layout>
  <h1>{props.text}</h1>
</Layout>;
}



export default SSR(Index);