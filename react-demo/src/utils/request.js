import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}









// import fetch from '@alipay/bigfish/sdk/fetch';
// import { notification } from '@alipay/bigfish/antd';
//
// const codeMessage = {
//   200: '服务器成功返回请求的数据',
//   201: '新建或修改数据成功。',
//   202: '一个请求已经进入后台排队（异步任务）',
//   204: '删除数据成功。',
//   400: '发出的请求有错误，服务器没有进行新建或修改数据,的操作。',
//   401: '用户没有权限（令牌、用户名、密码错误）。',
//   403: '用户得到授权，但是访问是被禁止的。',
//   404: '发出的请求针对的是不存在的记录，服务器没有进行操作',
//   406: '请求的格式不可得。',
//   410: '请求的资源被永久删除，且不会再得到的。',
//   422: '当创建一个对象时，发生一个验证错误。',
//   500: '服务器发生错误，请检查服务器',
//   502: '网关错误',
//   503: '服务不可用，服务器暂时过载或维护',
//   504: '网关超时',
// };
// // 8001 500
// // 2001权限
// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }
//   // 特殊处理
//   if(response.status == 500 ){
//     window.location.href='/index/Error-500'
//     return ;
//   }
//   if(response.status == 403 ){
//     window.location.href='/index/Error-403'
//     return ;
//   }
//
//   const errortext = codeMessage[response.status] || response.statusText;
//   notification.error({
//     message: `请求错误 ${response.status}: ${response.url}`,
//     description: errortext,
//   });
//   const error = new Error(errortext);
//   error.name = response.status;
//   error.response = response;
//   throw error;
// }
//
// function getCtokenFromCookie() {
//   const cookieParts = document.cookie.split(/;\s/g);
//   for (let i = 0, len = cookieParts.length; i < len; i += 1) {
//     const cookieNameValue = cookieParts[i].match(/([^=]+)=/i);
//     if (cookieNameValue && cookieNameValue[1] === 'ctoken') {
//       return cookieParts[i].substring(cookieNameValue[1].length + 1);
//     }
//   }
// }
//
// /**
//  * Requests a URL, returning a promise.
//  *
//  * @param  {string} url       The URL we want to request
//  * @param  {object} [options] The options we want to pass to "fetch"
//  * @return {object}           An object containing either "data" or "err"
//  */
//
// // showType为用户感知方式，0为提示自动消失，1位提示需要用户确认，4为用户不感知，9为用户页面整体覆盖强感知
// export default function request(url, options) {
//   const defaultOptions = {
//     credentials: 'include',
//   };
//   const newOptions = { ...defaultOptions, ...options };
//   if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
//     newOptions.headers = {
//       Accept: 'application/json',
//       'Content-Type': 'application/json; charset=utf-8',
//       ...newOptions.headers,
//     };
//     newOptions.body = JSON.stringify(newOptions.body);
//   }
//
//   let realURL = url;
//   const ctoken = getCtokenFromCookie();
//   if (ctoken) {
//     const str = url.indexOf('?') > -1 ? '&' : '?';
//     realURL = `${url}${str}ctoken=${encodeURIComponent(ctoken)}`;
//   }
//   return fetch(realURL, newOptions)
//     .then(checkStatus)
//     .then(response => response.json())
//     .then((resJson) => {
//
//       return new Promise((resolve) => {
//         if (resJson.resultCode === 0) {
//           resolve(resJson.data);
//         } else {
//           if(resJson.showType==0){
//             notification.error({
//               message: resJson.resultMsg,
//             });
//           }else if(resJson.showType==1){
//             notification.error({
//               message: resJson.resultMsg,
//               duration:null
//             });
//
//           }else if(resJson.showType==9 ){
//             if(resJson.resultCode==2001){
//               window.location.href='/index/Error-403'
//             }else if(resJson.resultCode==8001){
//               window.location.href='/index/Error-500'
//             }
//           }
//         }
//       });
//     });
// }
