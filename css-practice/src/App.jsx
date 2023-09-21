import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {

  let myStr = `Hello, this is just practice app for implement tailwind css in React.
  Thanks for visiting..!`

  let myAddr = "Gujarat, India"

  return (
    <>
      <h1 className='bg-green-400 font-bold text- text-black rounded-xl p-4'>Tailwind CSS</h1>
      <Card name="Neel Vaghasiya" content={myStr} place={myAddr} />
      <Card />
    </>
  )
}

export default App
