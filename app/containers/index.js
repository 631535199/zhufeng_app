/**
 * Created by jh on 2018/3/5.
 */
import React,{Component} from 'react';
import RouterMap from '../routes/index';
import {connect} from 'react-redux';
//绑定actionCreater组成的对象
import {bindActionCreators} from 'redux';
//获取所有actionCreater 组成的对象
import * as Actions from '../actions/userInfo';
import {getStorage} from '../local';
class App extends Component{
    constructor(){
        super();
        this.state ={
            done:false
        }
    }
    render(){
        return(
            <div>
                {this.state.done?<RouterMap/>:<div>loading..</div>}
            </div>
        )
    }
    componentDidMount(){
        //先去本地查找 是否存储过localstorage名字cityname
        //1.没city赋值默认
        let cityName =getStorage('cityName');
        if(cityName == null){
            cityName ='杭州'
        }
        //页面加载后设置一个城市
        this.props.userActions.update({
            cityName
        })
        this.setState({
            done:true
        })
        console.log(this.props.userActions);
    }
}
export default connect(
    state=>{//mapstatetoprops
        return {}
    },
    dispatch=>{//mapdispatchtoprops
        return{
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(App)