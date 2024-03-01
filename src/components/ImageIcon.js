import React from 'react'
import "./image_icon.css"
import Icons from "./Icons"
import iphoneImage from "../assets/blank_smartphone_mockup_isolate_on_background.jpg"
const ImageIcon = ({image,icon}) => {
  return (
    <div className='image_icon'>
      
<div className='top'>
    <img className='iphone' src={iphoneImage}/>
    <img className='image' src={image} style={{zIndex:"888"}}/>

</div>
<div className='bottom'>
    <Icons img={icon}/>
</div>
    </div>
  )
}

export default ImageIcon
