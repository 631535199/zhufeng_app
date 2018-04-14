/**
 * Created by jh on 2018/3/9.
 */
import React,{Component} from 'react';
import './index.less'
export default class HeaderComponent extends Component{
    render(){
        return(
            <div className="back header-component">
                <span>
                    <i className="iconfont icon-baitu" onClick={this.back.bind(this)}></i>
                    {this.props.title}
                </span>

            </div>
        )
    }
    back(){
        if(this.props.back){
            this.props.history.push(this.props.back);
        }else{
            this.props.history.go(-1);
        }
    }
}