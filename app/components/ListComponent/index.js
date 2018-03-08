/**
 * Created by jh on 2018/3/8.
 */
import React,{Component} from 'react';
import ListItem from './ListItem/index';
export default class ListComponent extends Component{

    render(){
        return(
            <div>
                <h2>猜你喜欢</h2>
                {this.props.data.map((item,index)=>(
                        <ListItem key ={index} data ={item}/>
                    ))}
            </div>
        )
    }
}