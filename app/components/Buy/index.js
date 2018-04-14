/**
 * Created by jh on 2018/4/11.
 */
import React,{Component} from 'react';
import './index.less'
export default class Buy extends Component{
    render(){
        return(
            <div className ="buy">
                <button>收藏</button>
                <button onClick={this.buy.bind(this)}>购买</button>
            </div>
        )
    }
    buy(){
        this.props.buy();
    }
}