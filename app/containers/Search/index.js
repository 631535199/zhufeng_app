import React,{Component} from 'react';
//可以从轮博图进，/search/
//搜索窗进
import SearchHeader from '../../components/SearchHeader';
export default class Search extends Component{
    render(){
        return(
            <div>
                <SearchHeader
                    value={this.props.match.params.keyword||""}
                    history={this.props.history}
                    fn={this.toSearch.bind(this)}
                />
            </div>
        )
    }
    toSearch(value){
        this.props.history.push('/search/all/'+value);

    }
}
