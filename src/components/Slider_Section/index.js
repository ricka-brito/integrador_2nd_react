import React from 'react'
import SliderItem from '../slider_item'
import percent from '../../assets/images/icon_percentage.png'
import wallet from '../../assets/images/Wallet.png'
import card_black from '../../assets/images/card_black.png'
import card_color from '../../assets/images/card_color.png'
import limit from '../../assets/images/limit.png'
import send from '../../assets/images/send.png'
import './slider_section.css'

function Slider_Section() {
  return (
    <>
    <div className='ad'>
      <div className='ad-slides'>
        <SliderItem background={'#313131'} icon={percent} text={(<>No hidden fees, <span>always for free</span></>)}/>
        <SliderItem background={'unset'} img={'https://i.ibb.co/DVyMDVn/Rectangle.png '} text={(<>No hidden fees, <span>always for free</span></>)}/>
        <SliderItem background={'#313131'} icon={wallet} text={(<>Let's fund <span>your account</span></>)}/>
        <SliderItem background={'#313131'} icon_size={'big'} icon={card_black} text={(<>Your physical <span>credit card is on it´s way.</span></>)}/>
        <SliderItem background={'#313131'} icon={limit} text={(<>Adjust the limit <span>as your way.</span></>)}/>
        <SliderItem background={'unset'} img={'https://i.ibb.co/NV33t7n/woman-sitten.png'} text={(<>Without, <span>leaving the place</span></>)}/>
        <SliderItem background={'unset'} img={'https://s3-alpha-sig.figma.com/img/b5da/a5d7/757c7631d39c71d1ef7bb0945e2b2ec2?Expires=1701043200&Signature=YrqByser5By4UYEb-9b0RwBQjYHxa-LNtmCxZjDTBl3~546bzhCij8iZyghwfbjJlUZp~wXlAlXiwW6jS08LotwvZCQTVSiIB77u8eyKdGD2OFtBBSR1lC7IJbKqXJrs5q74G9zO23ndvvf-BP~6e7n5OrPoCCXyx5sRSEeNUyzK1bHFWkX3kx5-q9EigXgj0Ha80t974mbl9~YziZg9mIoRZN-B2TMS8WvRFTBJrmewRRVZYoOOxbrLjkEfCn1NE83CcGD~na03jsMkqUhdl5rydQjAdf26FT30AIpY~Du6N8PF3jgPdShUfDB6AaU9CLCRvb-PQeNdJLOAu6y2hA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} text={(<>No hidden fees, <span>always for free</span></>)}/>
        <SliderItem background={'rgba(216, 69, 219, 0.54)'} icon_size={'big'} icon={card_color} text={(<>Your virtual <span>cards are ready!</span></>)}/>
        <SliderItem background={'unset'} img={'https://www.figma.com/file/6CeMI2YVGL5edQCIV8SCQE/image/e2a2c86ece1c0c4ffb038f9becf8b9660dcf34b2?fuid=1223301227113474217'} text={(<>Get double <span>cashback</span></>)}/>
        <SliderItem background={'unset'} img={'https://www.figma.com/file/6CeMI2YVGL5edQCIV8SCQE/image/2568e243a5a8bbd891bbb4d1f68f461c0e3e96bc?fuid=1223301227113474217'} text={(<>Earn rewards <span>on every spend</span></>)}/>
        <SliderItem background={'unset'} img={'https://www.figma.com/file/6CeMI2YVGL5edQCIV8SCQE/image/11ca56423cd24b9d90fc20b6436dab9feea1a86e?fuid=1223301227113474217'} text={(<>Refer a friend. <span>Give 20$, get 20$</span></>)}/>
        <SliderItem background={'#2F2525'} icon={send} text={(<>Refer a friend. <span>Give 20$, get 20$</span></>)}/> 
      </div>
      <div className='ad-slides'>
        <SliderItem background={'#313131'} icon={percent} text={(<>No hidden fees, <span>always for free</span></>)}/>
        <SliderItem background={'unset'} img={'https://i.ibb.co/DVyMDVn/Rectangle.png '} text={(<>No hidden fees, <span>always for free</span></>)}/>
        <SliderItem background={'#313131'} icon={wallet} text={(<>Let's fund <span>your account</span></>)}/>
        <SliderItem background={'#313131'} icon_size={'big'} icon={card_black} text={(<>Your physical <span>credit card is on it´s way.</span></>)}/>
        <SliderItem background={'#313131'} icon={limit} text={(<>Adjust the limit <span>as your way.</span></>)}/>
        <SliderItem background={'unset'} img={'https://i.ibb.co/NV33t7n/woman-sitten.png'} text={(<>Without, <span>leaving the place</span></>)}/>
        <SliderItem background={'unset'} img={'https://s3-alpha-sig.figma.com/img/b5da/a5d7/757c7631d39c71d1ef7bb0945e2b2ec2?Expires=1701043200&Signature=YrqByser5By4UYEb-9b0RwBQjYHxa-LNtmCxZjDTBl3~546bzhCij8iZyghwfbjJlUZp~wXlAlXiwW6jS08LotwvZCQTVSiIB77u8eyKdGD2OFtBBSR1lC7IJbKqXJrs5q74G9zO23ndvvf-BP~6e7n5OrPoCCXyx5sRSEeNUyzK1bHFWkX3kx5-q9EigXgj0Ha80t974mbl9~YziZg9mIoRZN-B2TMS8WvRFTBJrmewRRVZYoOOxbrLjkEfCn1NE83CcGD~na03jsMkqUhdl5rydQjAdf26FT30AIpY~Du6N8PF3jgPdShUfDB6AaU9CLCRvb-PQeNdJLOAu6y2hA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} text={(<>No hidden fees, <span>always for free</span></>)}/>
        <SliderItem background={'rgba(216, 69, 219, 0.54)'} icon_size={'big'} icon={card_color} text={(<>Your virtual <span>cards are ready!</span></>)}/>
        <SliderItem background={'unset'} img={'https://www.figma.com/file/6CeMI2YVGL5edQCIV8SCQE/image/e2a2c86ece1c0c4ffb038f9becf8b9660dcf34b2?fuid=1223301227113474217'} text={(<>Get double <span>cashback</span></>)}/>
        <SliderItem background={'unset'} img={'https://www.figma.com/file/6CeMI2YVGL5edQCIV8SCQE/image/2568e243a5a8bbd891bbb4d1f68f461c0e3e96bc?fuid=1223301227113474217'} text={(<>Earn rewards <span>on every spend</span></>)}/>
        <SliderItem background={'unset'} img={'https://www.figma.com/file/6CeMI2YVGL5edQCIV8SCQE/image/11ca56423cd24b9d90fc20b6436dab9feea1a86e?fuid=1223301227113474217'} text={(<>Refer a friend. <span>Give 20$, get 20$</span></>)}/>
        <SliderItem background={'#2F2525'} icon={send} text={(<>Refer a friend. <span>Give 20$, get 20$</span></>)}/>
      </div>
    </div>
     <div className='ad'>
     <div className='ad-slides'>    
       <SliderItem background={'unset'} img={'https://s3-alpha-sig.figma.com/img/b5da/a5d7/757c7631d39c71d1ef7bb0945e2b2ec2?Expires=1701043200&Signature=YrqByser5By4UYEb-9b0RwBQjYHxa-LNtmCxZjDTBl3~546bzhCij8iZyghwfbjJlUZp~wXlAlXiwW6jS08LotwvZCQTVSiIB77u8eyKdGD2OFtBBSR1lC7IJbKqXJrs5q74G9zO23ndvvf-BP~6e7n5OrPoCCXyx5sRSEeNUyzK1bHFWkX3kx5-q9EigXgj0Ha80t974mbl9~YziZg9mIoRZN-B2TMS8WvRFTBJrmewRRVZYoOOxbrLjkEfCn1NE83CcGD~na03jsMkqUhdl5rydQjAdf26FT30AIpY~Du6N8PF3jgPdShUfDB6AaU9CLCRvb-PQeNdJLOAu6y2hA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} text={(<>No hidden fees, <span>always for free</span></>)}/>
       <SliderItem background={'rgba(216, 69, 219, 0.54)'} icon_size={'big'} icon={card_color} text={(<>Your virtual <span>cards are ready!</span></>)}/>
       <SliderItem background={'unset'} img={'https://www.figma.com/file/6CeMI2YVGL5edQCIV8SCQE/image/e2a2c86ece1c0c4ffb038f9becf8b9660dcf34b2?fuid=1223301227113474217'} text={(<>Get double <span>cashback</span></>)}/>
       <SliderItem background={'unset'} img={'https://www.figma.com/file/6CeMI2YVGL5edQCIV8SCQE/image/2568e243a5a8bbd891bbb4d1f68f461c0e3e96bc?fuid=1223301227113474217'} text={(<>Earn rewards <span>on every spend</span></>)}/>
       <SliderItem background={'unset'} img={'https://www.figma.com/file/6CeMI2YVGL5edQCIV8SCQE/image/11ca56423cd24b9d90fc20b6436dab9feea1a86e?fuid=1223301227113474217'} text={(<>Refer a friend. <span>Give 20$, get 20$</span></>)}/>
       <SliderItem background={'#2F2525'} icon={send} text={(<>Refer a friend. <span>Give 20$, get 20$</span></>)}/> 
       <SliderItem background={'#313131'} icon={percent} text={(<>No hidden fees, <span>always for free</span></>)}/>
       <SliderItem background={'unset'} img={'https://i.ibb.co/DVyMDVn/Rectangle.png '} text={(<>No hidden fees, <span>always for free</span></>)}/>
       <SliderItem background={'#313131'} icon={wallet} text={(<>Let's fund <span>your account</span></>)}/>
       <SliderItem background={'#313131'} icon_size={'big'} icon={card_black} text={(<>Your physical <span>credit card is on it´s way.</span></>)}/>
       <SliderItem background={'#313131'} icon={limit} text={(<>Adjust the limit <span>as your way.</span></>)}/>
       <SliderItem background={'unset'} img={'https://i.ibb.co/NV33t7n/woman-sitten.png'} text={(<>Without, <span>leaving the place</span></>)}/>
     </div>
     <div className='ad-slides'>
     <SliderItem background={'unset'} img={'https://s3-alpha-sig.figma.com/img/b5da/a5d7/757c7631d39c71d1ef7bb0945e2b2ec2?Expires=1701043200&Signature=YrqByser5By4UYEb-9b0RwBQjYHxa-LNtmCxZjDTBl3~546bzhCij8iZyghwfbjJlUZp~wXlAlXiwW6jS08LotwvZCQTVSiIB77u8eyKdGD2OFtBBSR1lC7IJbKqXJrs5q74G9zO23ndvvf-BP~6e7n5OrPoCCXyx5sRSEeNUyzK1bHFWkX3kx5-q9EigXgj0Ha80t974mbl9~YziZg9mIoRZN-B2TMS8WvRFTBJrmewRRVZYoOOxbrLjkEfCn1NE83CcGD~na03jsMkqUhdl5rydQjAdf26FT30AIpY~Du6N8PF3jgPdShUfDB6AaU9CLCRvb-PQeNdJLOAu6y2hA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} text={(<>No hidden fees, <span>always for free</span></>)}/>
       <SliderItem background={'rgba(216, 69, 219, 0.54)'} icon_size={'big'} icon={card_color} text={(<>Your virtual <span>cards are ready!</span></>)}/>
       <SliderItem background={'unset'} img={'https://www.figma.com/file/6CeMI2YVGL5edQCIV8SCQE/image/e2a2c86ece1c0c4ffb038f9becf8b9660dcf34b2?fuid=1223301227113474217'} text={(<>Get double <span>cashback</span></>)}/>
       <SliderItem background={'unset'} img={'https://www.figma.com/file/6CeMI2YVGL5edQCIV8SCQE/image/2568e243a5a8bbd891bbb4d1f68f461c0e3e96bc?fuid=1223301227113474217'} text={(<>Earn rewards <span>on every spend</span></>)}/>
       <SliderItem background={'unset'} img={'https://www.figma.com/file/6CeMI2YVGL5edQCIV8SCQE/image/11ca56423cd24b9d90fc20b6436dab9feea1a86e?fuid=1223301227113474217'} text={(<>Refer a friend. <span>Give 20$, get 20$</span></>)}/>
       <SliderItem background={'#2F2525'} icon={send} text={(<>Refer a friend. <span>Give 20$, get 20$</span></>)}/> 
       <SliderItem background={'#313131'} icon={percent} text={(<>No hidden fees, <span>always for free</span></>)}/>
       <SliderItem background={'unset'} img={'https://i.ibb.co/DVyMDVn/Rectangle.png '} text={(<>No hidden fees, <span>always for free</span></>)}/>
       <SliderItem background={'#313131'} icon={wallet} text={(<>Let's fund <span>your account</span></>)}/>
       <SliderItem background={'#313131'} icon_size={'big'} icon={card_black} text={(<>Your physical <span>credit card is on it´s way.</span></>)}/>
       <SliderItem background={'#313131'} icon={limit} text={(<>Adjust the limit <span>as your way.</span></>)}/>
       <SliderItem background={'unset'} img={'https://i.ibb.co/NV33t7n/woman-sitten.png'} text={(<>Without, <span>leaving the place</span></>)}/>
     </div>
   </div>
   </>  
   )
}

export default Slider_Section