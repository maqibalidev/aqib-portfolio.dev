import React from 'react'
import "./projects_detils_part.scss"
import Icons from '../Icons'

const Projects_details_parts = ({items}) => {
  return (
    <div className='project_det_heading'>
      
{
  items.map(((data,index)=>(
       data.sub_heading.text != "" && <div key={index}>
       <div className='project_details_item_heading'>{data.heading+":"}</div>


{
  data.sub_heading.map((e,index)=>(
<div className='project_details_item_details'key={index}>
<Icons img={e.img}/>
<div className='project_details_item_text'>{e.text}</div>
</div>
))
}

</div>
    )))
}

    </div>
  )
}

export default Projects_details_parts
{/*  */}