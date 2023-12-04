import React from 'react';
import CardBack from '../../assets/images/cards.png';
import './CardsSession.css';


export default function CardSession() {
  return (
    <div className="div-cards">
        <div className="div-cards-infos">
            <div className="div-cards-infos-text" ><h1 className="cards-texts"><span className="degrade">No Fees.</span> Even the hidden ones</h1></div>
            <div className="div-cards-infos-text"><h1 className="cards-texts"><span  className="degrade">3% </span> <span className="cashback">CASHBACK</span> in all of your purchases</h1><h1 className="cards-texts">Your <br/>card. <span  className="degrade">Your Limit.</span></h1></div>
        </div>
        <img className="img-cards" src={CardBack}/>
    </div>
  )
}
