import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const[counter,setCounter] = useState(5)
  const addValue=()=>
  {
    setCounter((counter)=>counter+1)
    setCounter((counter)=>counter+1)
    setCounter((counter)=>counter+1)
    setCounter((counter)=>counter+1)
    
  }
  const removeValue=()=>{
    setCounter((counter)=>counter-1)
    setCounter((counter)=>counter-1)
    setCounter((counter)=>counter-1)
    setCounter((counter)=>counter-1)
  }
  return (
    <>
      <h1>A basic React Course</h1>
      <h2>your given value:{counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
      <p>counter value:{counter}</p>
    </>
  )
}

export default App
