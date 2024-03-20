import React from 'react'
import {Routes , Route } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Signup from './Components/Signup'
function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      
    </div>
  )
}

export default App