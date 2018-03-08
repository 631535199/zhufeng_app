/**
 * Created by jh on 2018/3/7.
 */
import React,{Component} from 'react';
import {getList} from '../../../fetch/home';
import ListComponent from '../../../components/ListComponent/index'
export default class List extends Component{
    constructor(){
        super();
        this.state ={
            hasMore:true,
            data:[]
        }
    }
    render(){
        return (
            <div>
                {this.state.data.length?<ListComponent data = {this.state.data}/>:<div>loading...</div>}

            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.cityName);
        this.processDate(getList(this.props.cityName,0))
    }
    processDate(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            console.log(data)
            this.setState({
                hasMore,
                data
            })
        })
    }
}