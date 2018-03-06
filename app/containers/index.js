/**
 * Created by jh on 2018/3/5.
 */
import React,{Component} from 'react';
import RouterMap from '../routes/index';
export default class App extends Component{
    constructor(){
        super();
        this.state ={
            done:false
        }
    }
    render(){
        return(
            <div>
                {this.state.done?<RouterMap/>:<div>loading..</div>}
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            done:true
        })
    }
}