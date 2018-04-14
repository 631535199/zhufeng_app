/**
 * Created by jh on 2018/3/27.
 */
import React,{Component} from 'react';
import './index.less'
export default class UserInfo extends Component{
    render(){
        return(
            <div className="user-info">
              <span>  {this.props.userInfo.username}</span>
                <span> {this.props.userInfo.cityName}</span>
            </div>
        )
    }
    //检查是否登录 跳转到登录页

}