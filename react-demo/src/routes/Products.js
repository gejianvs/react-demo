import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import FlyBall from '../components/FlyBall';



@connect(({ products, loading }) => ({
  products,
}))



export default  class Products extends React.Component {

  componentDidMount() {

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


  render() {
    const {products:{products}}=this.props
    return (
      <div>
        <h2>List of Products</h2>
        <ProductList  products={products} rowKey="id"  that={this}/>
        <FlyBall
          changeFlyBallCount={this.changeFlyBallCount.bind(this)}
          balls={this.state.balls}
          target={this.state.ballsTarget}
          curvature={0.0005}
          speed={1000}/>
      </div>
    );
  }
}





