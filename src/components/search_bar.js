import React,{Component} from 'react';

// const SearchBar =()=>{
//   return<input/>
// };

class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state ={ term:''};
  }
  render(){
    return (
      <div className="search-bar">
      <input onChange={(event)=>this.onInputChange(event.target.value)}/>
       {console.log(this.state.term)}
      </div>


);
  }

onInputChange(term){
  this.setState({term:term});
  this.props.onSearchTermChange(term);
}
}

export default SearchBar;
