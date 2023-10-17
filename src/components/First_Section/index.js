import React from 'react'
import './firstSection.css'
import QRcode from '../../assets/images/qrcode.png'

export default function FirstSection() {
  return (
    <div className="main">
        <h1 className="text">
            The bank from the <span className="degrade">future</span> in <br/>the <span className="degrade">present</span>
        </h1>
        <div className="app-down">
          <img className="qrcode" src={QRcode}/>
          <p className="info-down">
            Scan the QR code to create your account
          </p>
        </div>
    </div>
  )
}
