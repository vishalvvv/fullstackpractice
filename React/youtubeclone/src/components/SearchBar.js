import React from 'react';

class SearchBar extends React.Component{

    constructor(){
        super();
        this.state= {
            term: ''
        }
    }

    render(){
        return(
            <div>

                <form>
                    <input size="100" type="text" onChange={event => this.setState({term:event.target.value})}></input>
                     <button>Search</button>
                </form>

            </div>
        )
    }
}
export default SearchBar;