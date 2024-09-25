import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
    <div className='w-full h-screen duration-200'style={{backgroundColor: color}}>
      <div className='flex flex-wrap justify-center bottom-0 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=> setColor('red')}className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'red'}}>RED</button>
          <button onClick={()=> setColor('blue')}className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'blue'}}>BLUE</button>
          <button onClick={()=> setColor('green')}className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'green'}}>GREEN</button>
          <button onClick={()=> setColor('violet')}className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'violet'}}>VIOLET</button>
          <button onClick={()=> setColor('orange')}className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'orange'}}>ORANGE</button>
          <button onClick={()=> setColor('yellow')}className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'yellow'}}>YELLOW</button>
          <button onClick={()=> setColor('pink')}className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'pink'}}>PINK</button>
          <button onClick={()=> setColor('gray')}className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'gray'}}>GRAY</button>
          <button onClick={()=> setColor('purple')}className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'purple'}}>PURPLE</button>
          <button onClick={()=> setColor('maroon')}className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'maroon'}}>MAROON</button>
          <button onClick={()=> setColor('cyan')}className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'cyan'}}>CYAN</button>
          <button onClick={()=> setColor('brown')}className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'brown'}}>BROWN</button>
        </div>    
      </div>
    </div>
    </>
  )
}

export default App
