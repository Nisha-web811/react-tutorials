import React,{StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Github ,{githubInfoLoader} from './components/github/Github.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About/' element={<About/>}/>
      <Route loader={githubInfoLoader} path='Github/' element={<Github/>}/>
      <Route path='Contact/' element={<Contact/>}/>
      <Route path='User/' element={<User/>}/> 
    </Route>
  )
)

const root= ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)