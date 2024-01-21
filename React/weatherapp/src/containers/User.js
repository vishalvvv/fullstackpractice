import React from 'react';
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';
import { fetchWeather } from '../actions/index';

class User extends React.Component{
       componentDidMount(){
           console.log("component did mount");
         this.props.fetchWeather();
       }

       renderList = () => {
            let array= this.props.weather.map(weather => {
                 return <li key={weather._id}>{weather.name}</li>
             })
             return array;
       }
       render(){
              if(!this.props.weather){
                   return  <div>
                       Loading....
                   </div>
              }
              else
              {
                  return (<div>
                      <ul>
                      {this.renderList()}
                      </ul>
                       
                  </div>)
              }
       }

}

// to get app state!
function mapStateToProps(appState){
   return {weather:appState.weather}
}

// to bind fetchProducts function to component
function mapDispatchToProps(dispatch){
     return bindActionCreators({fetchWeather:fetchWeather},dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(User);
