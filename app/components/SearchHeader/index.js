/**
 * Created by jh on 2018/4/17.
 */
import React,{Component} from 'react';
import SearchInput from '../SearchInput/index'
import './index.less'
export default class SearchHeader extends Component{
    render(){
        return(
            <div className="back">
                <i class="iconfont icon-bianfu iconCssBack" onClick={this.back.bind(this)}></i>
                <div className="searchHeader">
                    <SearchInput value ={this.props.value}
                        fn={this.props.fn}
                    />
                </div>
            </div>
        )
    }
    back(){
        this.props.history.go(-1);
    }
}