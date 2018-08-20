import React from 'react';
import { Table, Popconfirm, Button,notification,Icon} from 'antd';
import {Link, Route, Switch} from 'dva/router';



export default  class ProductList extends React.Component {

  componentDidMount() {

  }


  downLoad=(e)=>{
    const {that}=this.props
    that.getPosition(e)
    setTimeout(that.showFlyBall,1)//添加定时器的目的是当获取位置设置状态是状态延迟更新
    // that.showFlyBall()//首次位置有偏差

  }





  render(){


    const {rowKey,products,}=this.props


    const columns = [{
      title: 'Name',
      dataIndex: 'name',
    }, {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Button onClick={this.downLoad}>下载</Button>
        );
      },
    }];



    return (
      <Table
        dataSource={products}
        columns={columns}
        rowKey={rowKey?rowKey:'key'}
      />
    );
  }
}

