/**
 * Created by jh on 2018/3/6.
 */
import React,{Component} from 'react';
//主页头部
import './index.less'
export default class HomeHeader extends Component{
    render(){
        return(
            <div className="home-header back">
                <div className="city">
                    {this.props.cityName}
                    <i className="iconfont icon-daxiang"></i>
                </div>
                <div className="search">
                    <i className="iconfont icon-baitu right"></i>
                    <input type="text"/>

                </div>
                <div className="profile">
                    <i class="iconfont icon-bianselong"></i>
                </div>

            </div>
        )
    }
}