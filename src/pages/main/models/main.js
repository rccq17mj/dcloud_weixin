/**
 * Created by wyz on 2018/5/22.
 */
import {fromJS,List} from "immutable"
import {HttpUtil} from "utils"

export default {
  namespace:"main",
  state:fromJS({
    proList:List(),
    cartList:List()
  }),
  reducers:{
    addProList(state,{payload}){
      return state.update("proList",v=>payload)
    },
    addCartList(state,{payload}){
      return state.update("cartList",v=>v.concat(payload))
    }
  },
  effects:{
    *fetchProList({payload},{call,put}){
      const res = yield call(HttpUtil,{url:"products.json"});
      yield put({type:"addProList",payload:res})
    }
  }

}