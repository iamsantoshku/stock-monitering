import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Private from '../components/Private'

const Approute = () => {
  return (
    <>
    <Routes>
        <Route path='/'element={<Signup/>}></Route>
        <Route path='/login'element={<Login/>}></Route>
        <Route element={<Private/>}>
        <Route path='/home' element={<Home/>}></Route>
        </Route>
        
    </Routes>
    
    </>
  )
}

export default Approute
