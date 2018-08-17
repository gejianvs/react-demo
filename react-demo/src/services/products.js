
import { stringify } from 'qs';
import request from '../utils/request';
// 贷款记录
export async function productList(params) {
  return request('/api/product/productList', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}


