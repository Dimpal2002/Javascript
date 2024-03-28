// import logo from './logo.svg';
import './App.css';
import React,{useReducer} from 'react'

const initialVal = 0;
function App() {
  const reducerFun=(state,action)=>{
    switch(action.type){
        case 'dec':
            return state-1;

        case 'inc':
            return state+1;

        case 'reset':
            return 0;

        default:
            return state;
    }
}
const[state,dispatch] = useReducer(reducerFun,initialVal)

  return (
    <div className="App">
    <h1 style={{color:'white'}}>React Web</h1>
    <h1>{state}</h1>
      <button className="btn" onClick={()=>{dispatch({type:'dec'})}}>Decrement</button>
      
      <button className="btn" onClick={()=>{dispatch({type:'inc'})}}>Increment</button><br></br>

      <button className="reset" onClick={()=>{dispatch({type:'reset'})}}>Reset</button>

    </div>
  );
}

export default App;
