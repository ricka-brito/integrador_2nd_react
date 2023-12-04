
import FirstSection from "../../components/First_Section"
import Terms from "../../components/Terms_PopUp"
import SecondSection from "../../components/Second_Section"
import React from 'react'
import './body.css'
import Slider_Section from "../../components/Slider_Section"
import ThirdSection from "../../components/Third_Section"

function Body() {
  return (
    <div className='body'>
      <FirstSection/>
      <SecondSection/>
      <Slider_Section/>
      <ThirdSection/>
      <Terms/>

    </div>
    
  )
}

export default Body