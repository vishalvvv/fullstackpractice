import React,{Component} from "react";
const HOC = (Component,data) => {
    return class extends React.Component{
        constructor(){
            super();
            this.state = {
                count:data
            };
        }
      handleClick = () => {
        this.setState({count:this.state.count+1});
      };
      render(){
        return(
            <React.Fragment>
                <Component count = {this.state.count} handleClick = {this.handleClick}></Component>
            </React.Fragment>
        )
      }
    }
}
export default HOC;