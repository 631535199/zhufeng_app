import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent/index';
import CurrentCity from '../../components/CurrentCity';
import {connect} from 'react-redux';
import * as Actions from '../../actions/userInfo';
import {bindActionCreators} from 'redux';
import ChooseCity from '../../components/ChooseCity';
class City extends Component{
    render(){
        return(
            <div>
                {/*netstat -anto | findstr 3002*/}
                {/*头部*/}
                <HeaderComponent title="选择城市" history={this.props.history}/>
                {/*当前城市*/}
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                {/*选择城市*/}
                <ChooseCity changeCity={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(city){
        //city代表当前选择城市组件选择后结果
        let oldInfo = this.props.userInfo;//取出原有的数据
        oldInfo.cityName = city;//更改成最新城市，将最新数据派发成动作
        console.log("aaaa")
        console.log(this.props.userActions);
        this.props.userActions.update(oldInfo)
        //更改成功后跳转首页
        this.props.history.push('/')
    }
}
export default connect(
    state=>{
        return{userInfo:state.userInfo}
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(City)