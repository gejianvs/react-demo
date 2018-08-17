import { productList } from '../services/products';
export default {
  namespace: 'products',
  state: {
    products: [
      {name: 'dva', id: 1},
      {name: 'antd', id: 2},
    ],
  },

  effects: {
    *productList({ payload }, { call, put }) {
      console.log(45555555555555)
      const response = yield call(productList, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },



  reducers: {
    save(state, action) {
      console.log(action.payload)
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};



