/**
 * Created by wyz on 2018/5/21.
 */
import 'whatwg-fetch'
import {Toast} from "antd-mobile"
import HttpConfig from "./httpConfig"

class FetchUtil extends HttpConfig{

  constructor(opt){
    super()
    this.req = {
      method: "GET",
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    this.const = {
      host:"127.0.0.1"
    };
    this.opt = opt;
  }

  getRequest(){
    return Object.assign({},this.req,this.opt)
  }

  getUrl(url){
    return `${this.const.host}/${url.replace(/^\//,"")}`
  }

  packResponse(res) {
    const { message, status } = res || {};
    let response = {};
    switch (status) {
      case 1:
        response = { ...res, success: true };
        break;
      case -1:
        Toast.fail(message);
        response = { ...res, success: false };
        break;
      case -2:
        response = { ...res, success: false };
        break;
      case -4:
        Toast.fail(message);
        response = { ...res, success: false };
        break;
      case -5:
        Toast.fail("加班太多,体力跟不上了.(･･;)");
        response = { ...res, success: false };
        break;
      default:
        response = { ...res, success: false };
        break;
    }
    return response;
  }


}

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

function dsyFetch(relativeUrl,opt){
  const util = new FetchUtil(opt)
  //const url = util.getUrl(relativeUrl);
  //const request = util.getRequest();
  return new Promise((resolve,rejest)=>{
    setTimeout( ()=>{
      resolve(data)
    },1000 )
    /*fetch(url,request).then((res)=>{
      const res = util.packResponse(res);
      if(res.success){
        resolve(res)
      }else{
        reject(res)
      }
    })
    .catch( err=>{
      Toast.fail("网络错误")
      reject(err)
    } )*/
  })

}

export default dsyFetch