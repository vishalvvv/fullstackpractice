import MyContext from "./MyContext";
import React, { Component } from "react";
class MyProvider extends Component{
    state = {
        cars: {
            car001:{name:'Audi',price:500},
            car002:{name:'BMW',price:600},
            car003:{name:'Benz',price:700}
        }
    };
    render(){
        return(
            <MyContext.Provider>
                value={{
                    cars:this.state.cars,
                    incrementPrice: selectedID => {
                        const cars = Object.assign({},this.state.cars);
                        cars[selectedID].price = cars[selectedID].price+1;
                        this.setState({
                            cars
                        });

                    },

                  decrementPrice: selectedID => {
                    const cars =Object.assign({},this.state.cars);
                    cars[selectedID].price = cars[selectedID].price-1;
                    this.setState({
                        cars
                    });
                  }

                }}

                {this.props.children}
            </MyContext.Provider>
        );
    }
}
export default MyProvider;