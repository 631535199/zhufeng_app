/**
 * Created by jh on 2018/3/6.
 */
import React,{Component} from 'react';
//路由两种类型 hashRouter browserRouter
import {HashRouter as Router,//提供一个路由容器
    Route,  //单条路由
    Switch //只匹配一次
} from 'react-router-dom';
import Home from '../containers/Home';
import Detail from '../containers/Detail';
import Login from '../containers/Login';
import User from '../containers/User';
import City from '../containers/City';
export default class RouterMap extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        {/*只有当路径为/的时候才匹配路由*/}
                        <Route exact path="/" component ={Home}/>
                        <Route path="/detail/:id" component={Detail}/>
                        {/*点击跳转到登录页，登陆后 再回到之前页面在login路径后可能需要保存上次点击的login的路径*/}
                        <Route path="/login/:route?" component={Login}/>
                        <Route path="/user" component={User}/>
                        <Route path="/city" component={City}/>

                    </Switch>
                </Router>
            </div>
        )
    }
}