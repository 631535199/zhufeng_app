/**
 * Created by jh on 2018/3/28.
 */
import React,{Component} from 'react';
import {getOrderList,postComment} from '../../../fetch/orderList';
import OrderListComponent from '../../../components/OrderListComponent/index'
export default class OrderList extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }

    render(){
        return(
            <div>
                {this.state.data.length?<OrderListComponent data = {this.state.data} commitComment ={this.commitComment.bind(this)}/>:<div>loading..</div>}
            </div>
        )
    }
    //提交评价内容到后台
    commitComment(id,comment,callback){ //callback更改评价状态
        //console.log(id)
        //console.log(comment)
        //callback()
        postComment({id,comment}).then(res=>res.json()).then(data=>{
            callback();//修改
        });
    }
    componentDidMount(){
        getOrderList(this.props.username).then(res=>res.json()).then(data=>{
            this.setState({
                data
            })
        })

    }
}