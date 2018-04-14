/**
 * Created by jh on 2018/3/28.
 */
import React,{Component} from 'react';
import './index.less'
export default class OrderListItem extends Component{
    constructor(props){
        super(props);
        //将属性转化成自己的状态
        this.state={
            commentState:props.data.commentState
        }
    }
    render(){
        let {id,img,title,count,subTitle,price,distance,mumber,commentState} = this.props.data;
        return(
            <div>
                <div className="orderList-item">
                    <img src={img} alt=""/>
                    <div className="list-con">
                        <h3>商户：{title}</h3>
                        <span>数量：{count}</span>
                        <span>加个：{price}</span>
                    </div>
                    <div className="list-btn">
                        {/*三个状态 0表示未评价 1表示已评价*/}
                        {this.state.commentState ===0?
                            <button onClick={this.changState.bind(this)}>评价</button>:
                            this.state.commentState===1?
                            "":
                            <button className="unselect">已评价</button>
                        }
                    </div>
                </div>
                {/*正在评价 出现*/}
                {this.state.commentState==1?<div className="com-area" ><textarea name="" id="" cols="30" rows="10" ref={ref=>this.comment=ref}></textarea>
                    <div>
                        <button onClick={this.sureCommit.bind(this)}>确认评价</button>
                        <button onClick={this.cancel.bind(this)}>取消</button></div>
                </div>:""}

            </div>

        )
    }
    changeState(){
        this.setState({
            commentState:2
        })
    }
    sureCommit(){
        this.props.commitComment(this.props.data.id,this.comment.value,this.changeState.bind(this))
    }
    changState(){
        this.setState({
            commentState:1
        })
    }
    cancel(){
        this.setState({
            commentState:0
        })
    }
}