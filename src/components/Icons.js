import React from 'react'
import "./icon.css"

const Icons = ({img,size}) => {
  return (
    <div className='_icon' style={{height:size!= undefined?size+"px" :"7vh" ,width:size!= undefined?size+"px" :"7vh"}}>
      
<img className='icon_img' src={img} style={{height:size!= undefined?size-10+"px" :"5vh" ,width:size!= undefined?size-10+"px" :"5vh"}}/>

    </div>
  )
}

export default Icons
