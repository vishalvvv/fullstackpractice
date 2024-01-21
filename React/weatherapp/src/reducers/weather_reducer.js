//function that accepts action and make a part of application state

  export default function(state = null, action){

     switch(action.type){

       case 'FETCH_WEATHER':   
       state = action.payload.data.weather;
          console.log('state',state);
       return state;

       default : return state;

     }

  }