import React from 'react';
import './footer.css';
import SwiftIcon from '../../assets/images/icon.png';
import FacebookIcon from '../../assets/images/face.png';
import InstagramIcon from '../../assets/images/insta.png';
import TikTokIcon from '../../assets/images/tik.png';
import TwitterIcon from '../../assets/images/twitter.png';
import YoutubeIcon from '../../assets/images/yout.png';
import arrow from '../../assets/images/arrow-up-solid.svg';


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

export default function Footer() {
  return (
    <>
    <div className='scroll'><div className='scrollup' onClick={() => topFunction()}><a className='button-scrollup' onClick={() => topFunction()}><img className='scrollup-img' src={arrow}/></a></div></div>
    <div className='footer'>
        <div className='footer-up'>
          <div className='social-footer'>
            <h1 className='social-text'>
            ACOMPANHE: 
            </h1>
            <div className='social-icons'>
              <a href="http://www.instagram.com" className='icons-link'><img className="icons" src={InstagramIcon}/></a>
              <a href="http://www.facebook.com" className='icons-link'><img className="icons" src={FacebookIcon}/></a>
              <a href="http://www.x.com" className='icons-link'><img className="icons" src={TwitterIcon}/></a>
              <a href="http://www.youtube.com" className='icons-link'><img className="icons" src={YoutubeIcon}/></a>
              <a href="http://www.tiktok.com" className='icons-link'><img className="icons" src={TikTokIcon}/></a>
            </div>
          </div>
            <p className='text-footer'>Banco SWIFT SA | CPNJ 24.691.317.0001-22<br/>
Chery St, S/Nº | West Reading | PA | CEP: 19611</p>
          <img src={SwiftIcon} className='img-footer'/>
        </div>
        <div className='footer-down'>
          <p>© 2023 BANCO SWIFT S.A.</p>
        </div>
    </div>
    </>
  )
}
