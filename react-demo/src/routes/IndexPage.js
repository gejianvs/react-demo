import React from 'react';
import {connect} from 'dva';
import {Link, Route, Switch} from 'dva/router';
import styles from './IndexPage.less';
import {Button, Layout, Menu, Icon, Tabs} from 'antd';


const { Sider, Content} = Layout;


class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    current: 'mail',
  }


  componentDidMount() {
  }

  handleClick = (e) => {
    const {match,history} = this.props;
    this.setState({
      current: e.key,
    });
  }

  render() {


    return (
      <Layout className={styles.layout}>
        <Sider className={styles.sider}>

        </Sider>
        <Layout>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="products">
               <Link to="/products"> <Icon type="mail"/>产品列表</Link>
              </Menu.Item>
              <Menu.Item key="detail" >
                <Link to="/detail"><Icon type="appstore"/>产品详情</Link>
              </Menu.Item>
            </Menu>
          <Content>
            {this.props.children}
          </Content>


        </Layout>
      </Layout>
    );
  }
}


export default IndexPage;


