import React, {useEffect, useState} from 'react'
import BurguerMenu from '../../components/Buguer_Menu'
import './header.css'
import SideBar from "../../components/SideBar"
import { GlobalContext } from "../../util/Context";

function Header() {
  const [header, setHeader] = useState("header")
  const [sideBarState, setSideBarState] = useState();


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
    <>
    <div className='header' style={{borderBottom: `${header}px solid rgba(170, 170, 170, 0.27)`}}>
        <BurguerMenu/>
        <a className='titulo' href='#'><p style={{backgroundColor: "unset"}}>SWIFT</p></a>
        <a className="abrir-conta" onClick={() => setSideBarState(true)}><p className="text-abrir">OPEN MY ACCOUNT</p></a>
    </div>
    <SideBar sidebaractive={sideBarState} setBar={setSideBarState}>
    </SideBar>
    </>
  )
}

export default Header