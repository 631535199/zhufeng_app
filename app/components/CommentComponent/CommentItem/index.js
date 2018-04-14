/**
 * Created by jh on 2018/3/9.
 */
import React,{Component} from 'react';
import Star from '../../Star/index'
export default class CommentItem extends Component{
    render(){
        let{username,comment,star} = this.props.data;
        return(
            <div>
                <div>
                    <i className="iconfont icon-baitu"></i>

                </div>
                <Star count={star}/>
                <div>
                    {comment}
                </div>
            </div>
        )
    }
}