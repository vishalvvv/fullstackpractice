import React from 'react';
class Contact extends React.Component{
    constructor(){
        super();
        this.state = {
            counter:1
        }
        console.log("contact-constructor called");
    }
    componentDidMount(){
        console.log("contact-component mounted");
    }
    componentDidUpdate(){
        console.log("contact-component did update")
    }
    inc = () => {
 this.setState ({counter:this.state.counter+1});
    }
    render(){
        console.log(" render called");
        return(
            <div>
<h1>im contact</h1>
<button onClick={this.inc}>increment</button>
            </div>
        )
    }
    componentWillUnmount(){
        console.log("contact- component unmounted");
    }
}
export default Contact;