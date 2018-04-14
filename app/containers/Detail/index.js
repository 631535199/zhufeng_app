/**
 * Created by jh on 2018/3/9.
 */
import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent/index';
import Info from './subpage/Info';
import Comment from './subpage/Conment';
import {connect} from 'react-redux';
import * as Actions from '../../actions/userInfo';
import {bindActionCreators} from 'redux';
import Buy from '../../components/Buy'
//通过路由渲染的组件都会在this.props上增加很多属性，例如history,match
class Detail extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                {/*头部*/}
                <HeaderComponent title = "商户详情" history={this.props.history} />
                {/*商户信息*/}
                <Info id = {this.props.match.params.id}/>
                {/*购买和收藏*/}
                <Buy buy={this.buy.bind(this)} store={this.store.bind(this)}/>
                {/*评论*/}
                <Comment id ={this.props.match.params.id}/>

            </div>
        )
    }
    componentDidMount(){
        //先从redux中获取所有的收藏列表[],如果有显示已收藏， 没有就是未收藏
    }
    buy(){ //购买
        // 如果登录成功点击购买
        //调到用户也
        let flag = this.checkLogin()
        if(flag){
            this.props.history.push('/user')
        }else{
            //如果登录成功后   ，跳回当前页
            this.props.history.push('/login'+encodeURIComponent('/detail'+this.props.match.params.id));
        }
    }
    store(){ //收藏
        //验证是否登录,如果没登录让他去登录，如果登录成功跳回详情页
    }
    checkLogin(){
        //检测是否登录,登陆过返回true ,未登录返回flase
        if(this.props.userInfo.username){
            return true;
        }
        return false;
    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    }
)(Detail)