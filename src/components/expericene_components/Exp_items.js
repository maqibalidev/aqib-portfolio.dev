import React from 'react'
import "./items.scss"
import Icons from "../Icons"

const items = ({icon,percent,name}) => {



  return (
    <div className='exp_item'>
  
<div className='exp_icon_img'><Icons  img={icon}/></div>
 
<div className='item_slider'>

<div className='item_slider_percent' style={{width:percent+"%", backgroundColor:percent>50? `rgba(10, `+percent+`0, 0, 0.308)`:"rgba("+percent+"0, 0, 0, 0.308)"}}></div>
</div>


<div className='percent_text'>{percent+"%"}</div>

<div className='exp_icons_name'>{name}</div>

    </div>
  )
}

export default items
