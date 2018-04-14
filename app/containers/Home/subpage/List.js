/**
 * Created by jh on 2018/3/7.
 */
import React,{Component} from 'react';
import {getList} from '../../../fetch/home';
import ListComponent from '../../../components/ListComponent/index';
import LoadMore from '../../../components/ListComponent/LoadMore/index'
export default class List extends Component{
    constructor(){
        super();
        this.state ={
            hasMore:true,
            data:[],
            page:0, //页码
            isLoading:false
        }
    }
    render(){
        return (
            <div>
                {this.state.data.length?<ListComponent data = {this.state.data}/>:<div>loading...</div>}
                <LoadMore hasmore = {this.state.hasMore} loadMore = {this.loadMore.bind(this)} isLoading={this.state.isLoading}/>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.cityName);
        this.processDate(getList(this.props.cityName,0))
    }
    loadMore(){
        console.log('loadmore+++++')
        this.setState({
            isLoadin:true,
            page:this.state.page+1
        },()=>{//这个函数获取最新地状态
            this.processDate(getList(this.props.cityName,this.state.page));
        })
    }
    processDate(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            console.log(data)
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoading:false
            })
        })
    }
}