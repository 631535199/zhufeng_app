/**
 * Created by jh on 2018/3/9.
 */
import React,{Component} from 'react';
import './index.less';
export default class Home extends Component{
    constructor(props){
        super(props);//[true,true,true,true,false]
        console.log(props.count);
        let arr = [];
        for(let i = 1;i<=5;i++){
            if(i<=props.count){
                arr.push(true)
            }else{
                arr.push(false);
            }
        }

        this.state={
            arr
        }

        console.log(arr);
    }
    render(){
        return(
            <div>
                {this.state.arr.map((item,index)=>(
                    item?<i className="iconfont icon-bianselong font" key = {index}></i>:<i className="iconfont icon-eyu font" key = {index}></i>
                ))}
            </div>
        )
    }
}