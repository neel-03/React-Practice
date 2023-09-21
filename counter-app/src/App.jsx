import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counterValue, setCounter] = useState(0);

  const add = () => {
    if (counterValue < 20) {
      setCounter(++counterValue)
    }
  }
  const sub = () => {
    if (counterValue - 1 >= 0) {
      setCounter(--counterValue)
    }
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>counter : {counterValue}</h2>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </>
  )
}


export default App
