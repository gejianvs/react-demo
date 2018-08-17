import React from 'react';
import {connect} from 'dva';
import {Route, Link, Switch} from 'dva/router';
import {Card, Tabs, Button} from 'antd';
import Product1 from './Product1';


const TabPane = Tabs.TabPane;


export default  class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    activeKey: 'product1'
  };


  componentDidMount() {
    // console.log(this.props)
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
//   linkTo=(){
//
// }

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


// <Route path="/product1" component={Product1}/>


{/*<Tabs*/
}
{/*onChange={this.onTabChange}*/
}
{/*animated={false}*/
}
{/*activeKey={this.state.activeKey}*/
}
{/*>*/
}
{/*{tabList.map(pane => <TabPane tab={pane.tab} key={pane.key}><Route path="/product1" component={Product1}/></TabPane>)}*/
}
{/*</Tabs>*/
}
