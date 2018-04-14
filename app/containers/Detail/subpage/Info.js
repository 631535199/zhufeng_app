/**
 * Created by jh on 2018/3/9.
 */
import React,{Component} from 'react';
import {getInfo} from '../../../fetch/detail';
import InfoComponent from '../../../components/InfoComponent/index'
export default class Info extends Component{
    constructor(){
        super();
        this.state ={
            data:false
        }
    }
    render(){
        return(
            <div>
                {this.state.data?<InfoComponent data={this.state.data} />:<div>正在加载...</div>}
            </div>
        )
    }
    componentDidMount(){
        getInfo(this.props.id).then(res=>res.json()).then(
            data=>{
                console.log(data);
                this.setState({
                    data
                })
            }
        )
    }
}