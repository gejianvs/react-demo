import React from 'react';
import {connect} from 'dva';
import {Card,Tabs} from 'antd';



export default  class Product1 extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isVisible: false,
    count: 0
  };


  componentDidMount() {
    // history.pushState({naem:'伟杰'},'dsfd','/demo');
    console.log('start')
  }


  render() {


    return (
      <Card bordered={false}>
        Product2
      </Card>
    );
  }
}


