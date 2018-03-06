/**
 * Created by jh on 2018/3/6.
 */
import React,{Component} from 'react';
import HomeHeader from '../../components/HomeHeader';
import Slider from '../../components/Slider';
import Ad from '../../fetch/home/subpage/Ad'
export default class Home extends Component{
    render(){
        return(
            <div>
                <HomeHeader cityName = "北京"/>
                <Slider/>
                <Ad/>
            </div>
        )
    }
}