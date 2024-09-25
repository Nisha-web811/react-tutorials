import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const elements = {
    type: 'a',
    props:{
        href:"https://instagram.com",
        target:'_blank'
    },
    children:"click me to visit instagram"
}
function MyApp(){
    return(
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}
createRoot(document.getElementById('root')).render(
  
    <App/>
) 
