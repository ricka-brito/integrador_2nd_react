import React from 'react'
import "./third_section.css";
import CustomSession from "../Custom_Session";
import Cards from '../../assets/images/card.png'
import Limit from '../../assets/images/limit-adjust.png'
import CardBack from '../../assets/images/cards.png'
import CardSession from "../Cards_Session";

function ThirdSection() {
  return (
    <div className="cards-infos">
        <div className="section-header">
            <div className="header-slides">
                <h1 className="head-elemt">&nbsp;Why Swift? • </h1>
                <h1 className="head-elemt">&nbsp;Why Swift? • </h1>
                <h1 className="head-elemt">&nbsp;Why Swift? • </h1>
                <h1 className="head-elemt">&nbsp;Why Swift? • </h1>
            </div>
            <div className="header-slides">
                <h1 className="head-elemt">&nbsp;Why Swift? • </h1>
                <h1 className="head-elemt">&nbsp;Why Swift? • </h1>
                <h1 className="head-elemt">&nbsp;Why Swift? • </h1>
                <h1 className="head-elemt">&nbsp;Why Swift? • </h1>
            </div>
        </div>
        <CustomSession img={Cards} highlight={"Keep physical and virtual cards in one place"} text={"instantly when you sign up, so you’ve always got access to your money when you need it."}/>
        <CustomSession img={Limit} highlight={"Control your credit limit"} text={"with the easy-to-use slider and keep your spending habits on track toward success."}/>
        <CardSession/>
    
    </div>
  )
}

export default ThirdSection