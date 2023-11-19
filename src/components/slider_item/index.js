import React from 'react'
import './slider_item.css'

function SliderItem(props) {
    const {text, img, icon, background, icon_size} = props;
    return (
        <div className='item' style={{backgroundColor: background, backgroundImage: `url(${img})`}}>
            {icon && <img src={icon} className='icon' style={icon_size == 'big' ? {width: "50%"} : null }/>}
            <h1 className='descslide'>{text}</h1>
        </div>
    )
}

export default SliderItem