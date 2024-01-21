import React from 'react';

class SearchBar extends React.Component{

    constructor(){
        super();
        this.state= {
            term: ''
        }
    }

     videoSearch = (event) => {

        event.preventDefault();
         
         this.props.onSearchItem(this.state.term);
     }
    render(){
        return(
            <div className="search form-group">

                <form>
                    <input className="form-control" size="100" type="text" onChange={event => this.setState({term:event.target.value})}></input>
                     <button className="btn btn-danger" onClick={this.videoSearch}>Search</button>
                </form>

            </div>
        )
    }
}
export default SearchBar;