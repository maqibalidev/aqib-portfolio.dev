import React from 'react'
import Icons from '../Icons'
import "./projects_item.scss"
const Projects_items = ({img,name,icons}) => {
  return (
    <div className='projects_item'>
      <div className='projects_item_image'><img className='project_img' src={img}/></div>
<div className='projects_item_bottom'>
    <div className='projects_item_name'>{name}</div>
    <div className='projects_item_icons'>
{
    icons.map((item,index)=>{
       if (index !=4) {
       return <Icons img={item.icon}size={30}/>
       }
    })
}
</div>
</div>
    </div>
  )
}

export default Projects_items
