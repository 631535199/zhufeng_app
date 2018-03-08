/**
 * Created by jh on 2018/3/8.
 */
import React,{Component} from 'react';
import './index.less';
export default class ListItem extends Component{
    render(){
        let {img,title,price,distance,number,id} = this.props.data;
        return(
            <div className="list-item">
                <img src={img} alt=""/>
                <div className="list-item-content">
                    <h3>{title}</h3>
                    <p>{price}</p>
                    <p>${distance}</p>
                    <p>{number}</p>

                </div>

            </div>
        )
    }
}