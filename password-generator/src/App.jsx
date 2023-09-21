import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)

  const [password, setPassword] = useState("")
  const passRef = useRef(null)

  const generatePassword = useCallback(() => {
    let password = ""
    let dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) {
      dictionary += "0123456789"
    }
    if (specialCharAllowed) {
      dictionary += "!@#$%_^&+-*?/~"
    }

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * dictionary.length + 1)
      password += dictionary.charAt(index)
    }
    setPassword(password)
  }, [length, numAllowed, specialCharAllowed, setPassword])

  useEffect(() => {
    generatePassword()
  }, [length, numAllowed, specialCharAllowed, generatePassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg px-4 py-3 my-8 shadow-md bg-gray-600 text-orange-400'>

        <h1 className='flex font-bold justify-center mb-6 my-1 text-4xl text-white'>Password Generator</h1>

        <div className='flex rounded-lg shadow-xl overflow-hidden mb-4'>
          <input type='text' className='outline-none w-full py-1 px-3'
            value={password}
            placeholder='Password'
            readOnly
            ref={passRef}
          />
          <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'
            onClick={() => {
              passRef.current?.select();
              window.navigator.clipboard.writeText(password)
            }}
          >Copy</button>
        </div>

        <div className='flex text-sm justify-center font-bold gap-x-2'>

          <div className='flex item-center gap-x-1'>
            <input type="range" className='cursor-pointer'
              min={8}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length : {length}</label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllowed}
              onChange={(e) => setNumAllowed((value) => !value)}
            />
            <label>Number</label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={specialCharAllowed}
              onChange={(e) => setSpecialCharAllowed((value) => !value)}
            />
            <label>Special Symbols</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
