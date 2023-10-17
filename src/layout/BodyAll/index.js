
import FirstSection from "../../components/First_Section"
import Terms from "../../components/Terms_PopUp"
import SecondSection from "../../components/Second_Section"
import React from 'react'
import './body.css'

function Body() {
  return (
    <div className='body'>
      <FirstSection/>
      <SecondSection/>
      <Terms/>
    </div>
    
  )
}

export default Body