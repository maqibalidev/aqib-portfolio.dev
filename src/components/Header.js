import React from 'react'
import "./header.css"
import { Link, NavLink } from 'react-router-dom'
const Header = ({active_item}) => {
  return (
    <div className='header'>
      
      <div className='left'>
      PORTFOLIO
      </div>
      
      <div className='center'>
     
<div className='items'>

<Link to={"/home"}>
<div className={active_item==1?"item active":"item"}>
Home
<div className='line'></div>
</div>
        
        </Link>
<Link to={"/experience"}>
<div className={active_item==2?"item active":"item"}>
Experience
<div className='line'></div>
</div>
</Link>

<Link to={"/projects"}>

<div className={active_item==3?"item active":"item"}>
Projects
<div className='line'></div>
</div>

</Link>
<Link to={"/about"}>

<div className={active_item==4?"item active":"item"}>
About
<div className='line'></div>
</div>
  
</Link>
</div>


      </div>
      <div className='right'></div>
    </div>
  )
}

export default Header
