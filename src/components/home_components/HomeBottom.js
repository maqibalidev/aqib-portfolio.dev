import React, { useEffect, useState } from 'react'
import "./home_bottom.css"
import ImageIcon from '../ImageIcon'
import img from "../../assets/right-arrow.png"

import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
const HomeBottom = () => {

  const [website_data,set_website_data] = useState([]);

  useEffect(()=>{
  
  const get_websites= async()=>{
  
  try {
    
  const wesite_data = await axios.get("https://aqib-portfolio.vercel.app/website_projects");
  
  set_website_data(wesite_data.data);
  
  
  } catch (error) {
    console.log(error)
  }
  
  
  }
  get_websites();
  
  },[]);

const navigate = useNavigate();

  const height = window.screen.width;
  return (
  <div>
    {height <= 500 ?(  <div className='bottom' style={{padding:"0px"}} >
           <div className='line'></div>

<div className='container'>
  <div className='top'>
      <div className='heading'>
          WEBISTES
          <div className='middle_line'></div>
      </div>
     
  </div>
  <div className='center'>

<div className='website'>
{
  website_data.map((web_data)=>(
    <img src={web_data.img}/>
  ))
}
</div>

  </div>
  <div className='_bottom'>

<Link to={"/projects"} >
<div className='button'>
<div className='text'>VIEW MORE</div>
<div className='arrow'>
  <img src={img}/>
</div>
</div>

</Link>
  </div>
</div>
    </div>):(
        <div className='bottom' >
        <div className='line'></div>

<div className='container'>
<div className='top'>
   <div className='heading'>
       WEBISTES
       <div className='middle_line'></div>
   </div>
  
</div>
<div className='center' style={{justifyContent:"center"}}>

<div className='website'>
{
 website_data&& website_data.length >0 ? ( website_data.map((web_data)=>(
    <img src={web_data.img}/>
  ))):(
  <div style={{display:"flex",justifyContent:"center", alignItems:"center",height:"100%"}}>
      <div style={{display:"flex",justifyContent:"center",margin:"50px 0px"}}>
    <div dis className='circular_progress'></div>
    </div>
  </div>
    
                  )
}

</div>

</div>
<div className='_bottom'>
<Link to={"/projects"} >
<div className='button'>
<div className='text'>VIEW MORE</div>
<div className='arrow'>
<img src={img}/>
</div>
</div>
</Link>
</div>
</div>
 </div>
    )}
  </div>
  )
}

export default HomeBottom
