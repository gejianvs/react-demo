import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import FlyBall from '../components/FlyBall';
import { Button,notification,Icon,Card} from 'antd';



@connect(({ products, loading }) => ({
  products,
}))



export default  class Products extends React.Component {


  componentDidMount() {

    const {history:{action}} = this.props;

    //弹窗的处理
    const div = document.getElementById('mask_div1')

    if (div && action == 'POP') {
      // 当从上一页返回需要保存状态显示原页面结构
      div.style.display = 'block'

    } else if (div && action != 'POP') {
      // 当刷新页面应当从原始开始  可通过观察弹窗结构发现可通过该方法
      div.style.display = 'block'
      div.getElementsByTagName('span')[0].innerHTML = ""
    }


  }


  componentWillUnmount() {
    //隐藏提示
    const mask_div1 = document.getElementById('mask_div1')
    if (mask_div1) {
      mask_div1.style.display = 'none'
    }
  }

  state = {
    count: 0,
    //小球相应状态
    ballsTarget: {sx: 420, sy: 35},
    // 抛物小球
    balls: [],
    position: {
      x: 0,
      y: 0
    },
  }


  showFlyBall = () => {
    let state = this.state
    let balls = this.state.balls
    let len = balls.length

    let newball = {
      id: new Date().getTime(),
      position: state.position
    }
    balls.push(newball)
    this.setState({
      balls: Object.assign([], balls),
    })
  }
// 获取点击位置
  getPosition = (e) => {
    this.setState({
      position: {
        x: e.pageX - 30,
        y: e.pageY - 30
      }
    })
  }

  changeFlyBallCount(id) {
    let state = this.state
    let balls = state.balls
    for (let i = 0; i < balls.length; i++) {
      if (balls[i].id === id) {
        balls.splice(i, 1)
        break
      }
    }
    this.setState({
      balls: Object.assign([], state.balls)
    })
  }

// 消息通知

  close = () => {
    console.log('测试');
  };
  // 重新下载
  repeatDownLoad=(key)=>{
    console.log('重新下载逻辑')
    notification.close(key)
  }
  // 查看
  review=(key)=>{
    const {history}=this.props
    history.push('/detail')
    notification.close(key)
  }


  openNotification = () => {

    const key = `open${Date.now()}`;
    const btn = (
      <React.Fragment>
        <Button type="primary" size="small" onClick={this.repeatDownLoad.bind(null,key)}>
          重新下载
        </Button>
        <Button type="primary" size="small" onClick={this.review.bind(null,key)} style={{marginLeft:'10px'}}>
          查看
        </Button>
      </React.Fragment>

    );

    const div = document.getElementById('mask_div1') ? document.getElementById('mask_div1') : document.createElement('div')
    div.id = 'mask_div1';
    document.body.appendChild(div)


    notification.config({
      getContainer: () => {
        return div
      },
    });


    notification.open({
      message: 'Notification Title',
      description: '测试',
      btn,
      key,
      onClose: this.close,
      duration: 0,
    });
  };


  ifoTest=()=>{
    for(let i=0;i<2;i++){
      this.openNotification()
    }

  }


  productList=()=>{
    const {dispatch}=this.props
    const  values={
      name:'伟杰'
    }
    dispatch({
      type:'products/productList',
      payload: values,

    }).then(()=>{
      console.log('完成')
    })
  }

  render() {
    const {products:{data:{list}}}=this.props
    return (
      <Card id="content">
        <h2>List of Products</h2>
        <ProductList  products={list} rowKey="id"  that={this}/>
        <Button type="primary" onClick={this.ifoTest}>下载消息通知</Button>
        <hr/>

        <Button type="primary" onClick={this.productList}>接口测试</Button>

        <FlyBall
          changeFlyBallCount={this.changeFlyBallCount.bind(this)}
          balls={this.state.balls}
          target={this.state.ballsTarget}
          curvature={0.0005}
          speed={1000}/>
      </Card>
    );
  }
}





