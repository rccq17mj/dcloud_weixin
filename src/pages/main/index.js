import React from 'react';
import {connect} from "dva"
import { Grid ,ActivityIndicator} from 'antd-mobile';

@connect(
  (state)=>{
    return {
      loading:state.loading.models.main,
      main:state.main.toJS()
    }
  }
)
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    handleProClick(item){
      //debugger
      this.props.dispatch({type:"main/addCartList",payload:item})
    }

    componentDidMount(){
      this.props.dispatch({type:"main/fetchProList",payload:[]})
    }

    render() {
        const {proList:data} = this.props.main
        //console.log("props",this.props,data)
        if(this.props.loading){
          return <ActivityIndicator/>
        }

        return (
          <div>
              <div className="sub-title" key="asdsad" >商品列表</div>
              <Grid data={data}
                    columnNum={3}
                    renderItem={(dataItem,k) => (
                        <div style={{ padding: '12.5px' }} key={k} onClick={ this.handleProClick.bind(this,dataItem) }>
                          <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
                          <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                            <span>{dataItem.text}</span>
                          </div>
                        </div>
                      )}
              />
          </div>
        )

    }
}
