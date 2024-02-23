import React from 'react'
import './Header.css'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <header className='header'>
      <div className='header1'>
        <Link to='/'>
        <h1 className='hidding'>
          <span className='span1'>Dev</span>
          <span className='span2'>Estate</span>
        </h1>
        </Link>
        <form className='form'>
          <input type="text" placeholder='Search...' className='search' />
          <FaSearch className='' />
        </form>
        <ul className='Ul'>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/signup'>
            <li>Signup</li>
          </Link>
          <Link to='/profile'>
            <li>Profile</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

export default Header