import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Navlist from '../NavList/Navlist'
const Navbar = () => {
  return (
    <header className="header">
      <Navlist />
    </header>
  )
}

export default Navbar