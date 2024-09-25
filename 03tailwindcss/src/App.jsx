import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card userName='Kim Taehyung' post='CEO' image="https://i.pinimg.com/736x/1c/23/a6/1c23a6d6092d8766856c57da0326c728.jpg"/>
      <Card post='KPOP singer'image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSdMLpK6Kzf665pO66jyTxNxcEpa1X19DiI9XIGmKMD-n216tBekzeNcmqAcyOR_70VQ&usqp=CAU"/>
      <Card/>
    </>
  )
}

export default App
