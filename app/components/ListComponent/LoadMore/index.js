/**
 * Created by jh on 2018/3/8.
 */
import React,{Component} from 'react';
import './index.less';
export default class LoadMore extends Component{
    render(){
        return(
            <div className="has-more">
                {this.props.hasmore?<div ref = 'more' onClick={this.loadMore.bind(this)}>LoadMore..</div>:<div>我是有底线的!</div>}


            </div>
        )
    }
    componentDidMount(){
        //绑定滚动事件
        this.fn=()=>{
            clearTimeout(this.timer);
            this.timer = setTimeout(()=>{
                console.log('滚动');
                //先判断是否正在加载
                //判断按钮距离和屏幕顶端的高度和可视窗口的高度
                if(this.props.isLoading){
                    return
                }

                //判断按钮距离屏幕顶端高度和可视窗口高度
                let screen =window.screen.height;
                let top = this.refs.more.getBoundingClientRect().top;
                //获取当前元素位置  可以获取上下左右
                //console.log(this.refs.more);
                if(top<screen){
                    this.props.loadMore();
                }
            },50)
        };
        window.addEventListener('scroll',this.fn)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.fn)
    }
    loadMore(){
        //调用父级传递过来的加载更多函数
        if(this.props.isLoading){
            return
        }
        this.props.loadMore();
    }
}
