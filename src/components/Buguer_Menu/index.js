import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './burger.css';

function BurguerMenu() {
  return (
    <a href="" className='menu'>
        <FontAwesomeIcon color='#fff' size='2x' icon={faBars} />
        <h1 className='textMenu'>MENU</h1>
    </a>
  )
}

export default BurguerMenu