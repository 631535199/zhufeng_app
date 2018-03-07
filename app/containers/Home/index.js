/**
 * Created by jh on 2018/3/6.
 */
import React,{Component} from 'react';
import HomeHeader from '../../components/HomeHeader';
import Slider from '../../components/Slider';
import Ad from '../../fetch/home/subpage/Ad';
import {connect} from 'react-redux';
class Home extends Component{
    render(){
        return(
            <div>
                <HomeHeader cityName = {this.props.userInfo.cityName}/>
                <Slider/>
                <Ad/>
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