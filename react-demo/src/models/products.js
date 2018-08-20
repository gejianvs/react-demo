import { productList } from '../services/products';
export default {
  namespace: 'products',
  state: {
    data:{
      list: [
        {name: 'dva', id: 1},
        {name: 'antd', id: 2},
      ],
      pagination: {
        total: 100,
        pageSize: 30,
        current: 5,
      },
    }

  },

  effects: {
    *productList({ payload }, { call, put }) {
      const response = yield call(productList, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },



  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};



