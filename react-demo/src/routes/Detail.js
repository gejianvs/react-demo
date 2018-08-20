import React from 'react';
import {connect} from 'dva';
import {Route, Link, Switch} from 'dva/router';
import {Card, Tabs, Button} from 'antd';


export default  class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    activeKey: 'product1'
  };


  componentDidMount() {
  }

  // 切换触发   主要路由跳转
  onTabChange = (key) => {
    const {match, history} = this.props;
    this.setState({
      activeKey: key,
    });
    switch (key) {
      case 'product1':
        history.push(`${match.url}/product1`)
        break;
      case 'product2':
        history.push(`${match.url}/product2`)
        break;
      default:
        break;
    }
    ;
  }


  render() {
    const {match}=this.props
    const tabList = [{
      key: 'product1',
      tab: '产品一',
    }, {
      key: 'product2',
      tab: '产品二',
    }];

    return (
      <Card bordered={false}>
        <Link to='/detail/product1'>跳转 </Link>
        {this.props.children}

      </Card>
    );
  }
}

