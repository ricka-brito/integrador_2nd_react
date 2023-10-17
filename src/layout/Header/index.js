import React, {useEffect, useState} from 'react'
import BurguerMenu from '../../components/Buguer_Menu'
import './header.css'

function Header() {
  const [header, setHeader] = useState("header")

  const listenScrollEvent = (event) => {
    if (window.scrollY < 63) {
      return setHeader(0)
    } else if (window.scrollY > 60) {
      return setHeader(1)
    } 
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);


  return (
    <div className='header' style={{borderBottom: `${header}px solid rgba(170, 170, 170, 0.27)`}}>
        <BurguerMenu/>
        <a className='titulo' href='#'><p style={{backgroundColor: "unset"}}>SWIFT</p></a>
        <a className="abrir-conta"><p className="text-abrir">ABRIR MINHA CONTA</p></a>
    </div>
  )
}

export default Header