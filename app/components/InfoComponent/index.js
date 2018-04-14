/**
 * Created by jh on 2018/3/9.
 */
import React,{Component} from 'react';
import Star from '../Star/index';
import './index.less';
export default class InfoComponent extends Component{
    render(){
        console.log(this.props.data);
        let {img,star,subTitle,price,desc,title} = this.props.data;
        return(
            <div className="info-component">
                <div className="info-list">
                    <img src={img} alt=""/>
                    <div>
                        {title}
                        <div>
                            {/*star组件要接收一个星星组件*/}
                            <Star count={star}/> ${price}
                        </div>
                        <p>{subTitle}</p>
                    </div>
                </div>
                {/*将内容装换为html插入到页面中*/}
                <div dangerouslySetInnerHTML={{__html:desc}}>

                </div>
            </div>
        )
    }
}