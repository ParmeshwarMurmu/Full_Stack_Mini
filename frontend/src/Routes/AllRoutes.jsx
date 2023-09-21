import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Login } from './Login'
import { Home } from './Home'
import { SignUp } from './SignUp'
import { Product } from './Product'
import { PrivateRoute } from './PrivateRoute'

export const AllRoutes = () => {
  return (
    <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<PrivateRoute>
          <Product />
        </PrivateRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}
