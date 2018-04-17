/**
 * Created by jh on 2018/3/6.
 */
import React,{Component} from 'react';
import HomeHeader from '../../components/HomeHeader';
import Slider from '../../components/Slider';
import Ad from './subpage/Ad';
import {connect} from 'react-redux';
import List from './subpage/List';
class Home extends Component{
    render(){
        return(
            <div>
                <HomeHeader cityName = {this.props.userInfo.cityName} history={this.props.history}/>
                <Slider/>
                <Ad/>
                <List cityName = {this.props.userInfo.cityName}/>
            </div>
        )
    }
}
//取出redux中的城市传递给homeHeader
export default connect(
    state=>{
        return{
            userInfo:state.userInfo //取出redux state中userinfo
        }
    }

)(Home)