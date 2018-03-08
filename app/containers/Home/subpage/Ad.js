/**
 * Created by jh on 2018/3/6.
 */
import React,{Component} from 'react';
import {getAd} from '../../../fetch/home';
import './index.less'
export default class Home extends Component{
    constructor(){
        super();
        this.state = {
            data:[

            ]
        }
    }
    render(){
        return(
            <div>
                <h3>超值动物园</h3>
                <div className="ad">
                    {this.state.data.length?
                        this.state.data.map((item,index)=>(
                            <img src={item.img} title={item.title}/>
                        ))
                        :<div>loading..</div>
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        getAd().then(res=>res.json()).then(data=>{
            console.log(data)
            this.setState({
                data
            })
        })
    }
}