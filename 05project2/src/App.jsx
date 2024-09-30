import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character,setCharacter] = useState(false)
  const [password, setPassword] = useState('')

  const passwordref = useRef(null)

const generatePassword = useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
  if(number) str+="0123456789"
  if(character) str+="!@#$%^&*()_+"

  for(let i=1;i< length;i++)
  {
    const char=Math.floor(Math.random()*str.length + 1)
    pass+=str.charAt(char)
  }
  setPassword(pass)
},[length,number,character])

const CopyPasswordToClipboard=()=>{
  window.navigator.clipboard.writeText(password)
  passwordref.current?.select()
}

useEffect(()=>{
  generatePassword()
},[length,number,character])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500'>
      <h1 className='text-white text-center my-3'>PASSWORD GENERATOR</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 '
        placeholder='password'
        readOnly
        ref={passwordref}/>
        <button onClick={CopyPasswordToClipboard}
        className='outline-none bg-blue-600 text-white py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e)=> setLength(e.target.value)}
          name=""
          id=""/>
          <label htmlFor='length'>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={number}
          onChange={()=> {setNumber((prev) =>!prev)}}
          name=''
          id=''/>
          <label htmlFor='number'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={character}
          onChange={()=> {setCharacter((prev) =>!prev)}}
          name=''
          id=''/>
          <label htmlFor='character'>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
