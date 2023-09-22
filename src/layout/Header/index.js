import React from 'react'
import BurguerMenu from '../../components/Buguer_Menu'
import './header.css'

function Header() {
  return (
    <div className='header'>
        <BurguerMenu/>
        <a className='titulo' href='#'><p>SWIFT</p></a>
        <div/>
    </div>
  )
}

export default Header