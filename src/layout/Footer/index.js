import React from 'react';
import './footer.css';
import SwiftIcon from '../../assets/images/icon.png';
import FacebookIcon from '../../assets/images/face.png';
import InstagramIcon from '../../assets/images/insta.png';
import TikTokIcon from '../../assets/images/tik.png';
import TwitterIcon from '../../assets/images/twitter.png';
import YoutubeIcon from '../../assets/images/yout.png';

export default function Footer() {
  return (
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
  )
}
