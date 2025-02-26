import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Discover_Chefity from './component/Discover_Chefity'
import Login from './component/Login'


function App() {
  return(
    <>
  <Discover_Chefity></Discover_Chefity>
  <hr/>
  <Login></Login>
  
    </>
  )
}

export default App