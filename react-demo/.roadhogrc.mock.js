
import result from './mock/products.mock';  // 引入mock的数据
export default {
  'POST /api/product/productList': {
    resultCode: 0,
    resultMsg: '请求成功',
    data: {
      list: [
        {name: '电脑', id: 1},
        {name: '鼠标', id: 2},
      ],
      pagination: {
        total: 100,
        pageSize: 30,
        current: 5,
      },
    },
  }
}
