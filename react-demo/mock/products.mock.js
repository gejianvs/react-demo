
module.exports = {// 贷款记录
  'POST /api/product/productList': () => {
    const result = {
      resultCode: 0,
      resultMsg: '请求成功',
      data: {
        list: [
          {name: 'dva', id: 1},
          {name: 'antd', id: 2},
        ],
      },
    };
    return result;
  },
}






