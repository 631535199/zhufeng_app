import React,{Component} from 'react';
import './index.less'
export default class CurrentCity extends Component{
    render(){
        return(
            <div className="currentCity">
                {this.props.cityName}
                <hr/>
            </div>
        )
    }
}