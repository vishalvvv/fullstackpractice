//function that brings data from external source(api calls) and sends 
//that data to  reducer

import axios from 'axios';

 export function fetchWeather(){

    console.log("I am called");

  var promise = axios.get("https://api.openweathermap.org/data/2.5/forecast?q=Hyderabad&appid=db0751bad29aec9f7bb90eb88ca76607");

  return {
      type:"FETCH_WEATHER",
       payload : promise
  }

 }