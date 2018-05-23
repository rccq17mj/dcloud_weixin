/**
 * Created by wyz on 2018/5/22.
 */
import {fromJS,List} from "immutable"
import {fetch} from "dsykit"

export default {
  namespace:"main",
  state:fromJS({
    proList:List(),
    cartList:List()
  }),
  reducers:{
    addProList(state,{payload}){
      return state.update("proList",v=>v.concat(payload))
    },
    addCartList(state,{payload}){
      return state.update("cartList",v=>v.concat(payload))
    }
  },
  effects:{
    *fetchProList({payload},{call,put}){
      const res = yield call(fetch,{url:"proList"});
      yield put({type:"addProList",payload:res})
    }
  }

}