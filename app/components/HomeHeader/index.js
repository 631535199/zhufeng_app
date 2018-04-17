/**
 * Created by jh on 2018/3/6.
 */
import React,{Component} from 'react';
//主页头部
import './index.less';
import {Link} from 'react-router-dom';
import SearchInput from '../SearchInput/index'
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
                    {/*此搜索框需要一个函数,当回车 调用传递函数 /search/all/输入框内容 */}
                    <SearchInput value="" fn = {this.toSearch.bind(this)}/>

                </div>
                <Link to = "/login">
                    <div className="profile">
                        <i class="iconfont icon-bianselong"></i>
                    </div>
                </Link>
            </div>
        )
    }
    toSearch(value){
        //history 自己默认不存在，通过父亲传递
        console.log(value)
        this.props.history.push('/search/all/'+value);
    }
}