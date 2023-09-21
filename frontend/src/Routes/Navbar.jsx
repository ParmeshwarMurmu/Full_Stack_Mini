import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

export const Navbar = () => {
  return (
    <DIV>
        <Link to={'/'}>Home</Link>
        <Link to={'/cart'}>Cart</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/signup'}>SignUp</Link>
    </DIV>
  )
}

const DIV = styled.div`

display: flex;
justify-content: space-evenly;
  
`