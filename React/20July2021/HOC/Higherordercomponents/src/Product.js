import React from 'react';
import HOC from './HOC';
class Product extends React.Component{
    render(){
        return(
            <React.Fragment>
                Product,count {this.props.count}
                <button onClick={this.props.handleClick}>Productcount</button>
            </React.Fragment>
        )
    }
}
const ProductHOC = HOC(Product,333);
export default ProductHOC;
