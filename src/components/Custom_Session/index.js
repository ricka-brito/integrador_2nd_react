import React from 'react'
import './customSession.css';

export default function CustomSession({highlight, text, img}) {
  return (
    <div className="all-content">
        <div>
            <img src={img} alt="img"/>
        </div>
        <h1 className="desc-info"><span>{highlight}</span> {text}</h1>
    </div>
    
  )
}
