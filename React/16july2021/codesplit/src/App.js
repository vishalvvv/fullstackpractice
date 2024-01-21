import logo from './logo.svg';
import './App.css';
import React,{Suspense} from 'react';


const Comp1=React.lazy(()=> import('./Component1'));
const Comp2 = React.lazy(()=> import('./Component2'));
function App(){
  return(
    <React.Fragment>
      <Suspense fallback={<div>loading......please wait</div>}>
        

      <Comp1>  </Comp1>
      <Comp2>  </Comp2>
      </Suspense>
    </React.Fragment>
  )
}
export default App;