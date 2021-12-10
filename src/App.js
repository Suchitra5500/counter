import './style.css'
import {useState} from 'react'
function App() {
  let initialState = 0;
  const [currentState,setState]=useState(initialState)

  const increment = ()=>{
    console.log('button-clicked')
    //incrementing counter
    setState(currentState+1)
  }
  const decrement=()=>{
    setState(currentState-1)
  }
  return (
    <div className="counter">
      <h1>Counter Application</h1> 
      <h1>Counter Value :{currentState} </h1>
      <button onClick={increment} className="button">Increment</button>
      <button onClick={decrement} className="button">Decrement</button>
    </div>
  )
}

export default App
