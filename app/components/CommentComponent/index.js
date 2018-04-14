/**
 * Created by jh on 2018/3/9.
 */
import React,{Component} from 'react';
import CommentItem from './CommentItem/index'
export default class CommentComponent extends Component{
    render(){
        return(
            <div>
                {this.props.data.map((item,index)=>(
                    <CommentItem data={item} key={index}/>
                ))}
            </div>
        )
    }
}