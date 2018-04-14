/**
 * Created by jh on 2018/3/6.
 */
import React,{Component} from 'react';
//主页头部
import './index.less';
import {Link} from 'react-router-dom';
export default class HomeHeader extends Component{
    render(){
        return(
            <div className="home-header back">
                <Link to="/city">
                <div className="city">
                    {this.props.cityName}
                    <i className="iconfont icon-daxiang"></i>
                </div>
                </Link>
                <div className="search">
                    <i className="iconfont icon-baitu right"></i>
                    <input type="text"/>

                </div>
                <Link to = "/login">
                    <div className="profile">
                        <i class="iconfont icon-bianselong"></i>
                    </div>
                </Link>
            </div>
        )
    }
}