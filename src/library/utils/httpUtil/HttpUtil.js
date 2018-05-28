/**
 * Created by wyz on 2018/5/21.
 */
 import 'whatwg-fetch'
//import "dva/fetch"
import {Toast} from "antd-mobile"
import HttpConfig from "./httpConfig"

class HttpUtil extends HttpConfig{

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
 const util = new HttpUtil(opt);
 // const url = util.getUrl(relativeUrl);
 const url = relativeUrl.url;
 const request = util.getRequest();
  return new Promise((resolve,reject)=>{
    //debugger
    fetch(url,request).then((res)=>{
      console.log("res",res)
      // res = util.packResponse(res);
      if(res.status == 200){
        return res.json()
      }else{
        reject(res);
      }
    })
      .then(res=>{
        resolve(res.list)
      })
    .catch( err=>{
      Toast.fail("网络错误")
        reject(err)
    })
    //fetch("http://httpbin.org/get").then(function(response) {
    //  return response.json()
    //}).then(res=>{
    //  console.log("res",res)
    //});
  })
}

export default dsyFetch