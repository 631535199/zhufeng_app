/**
 * Created by jh on 2018/3/6.
 */
import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less';
export default class Slider extends Component{
    constructor(){
        super();
        this.state={
            index:0
        }
    }
    render(){
        let opts={
            continuous:false,
            callback:(index)=>{
                this.setState({
                    index
                })
            }
        }
        return(
            <div>
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    <div>
                        <ul className="swipeUl">
                            <li>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="swipeUl">
                            <li>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="swipeUl">
                            <li>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>
                                <div>
                                    <i className="iconfont icon-bianfu"></i>
                                    <span>蝙蝠</span>
                                </div>

                            </li>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="dots">
                    <li className={this.state.index==0?"active":""}></li>
                    <li className={this.state.index==1?"active":""}></li>
                    <li className={this.state.index==2?"active":""}></li>

                </ul>
            </div>
        )
    }
}