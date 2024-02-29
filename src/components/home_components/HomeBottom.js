import React, { useEffect, useState } from 'react'
import "./home_bottom.css"
import ImageIcon from '../ImageIcon'
import img from "../../assets/right-arrow.png"
import image1 from "../../assets/Screenshot_20230322-072112_Tamir_project.jpg"
import Icons from '../Icons'
import reactIcon from "../../assets/icons8-react-100.png"
import nodejsIcon from "../../assets/icons8-node-js-48.png"
import firebaseIcon from "../../assets/icons8-firebase-48.png"
import javaIcon from "../../assets/icons8-java-48.png"
import mongoDbIcon from "../../assets/icons8-mongodb-48.png"
import sqlIcon from "../../assets/icons8-my-sql-48.png"
import flutterIcon from "../../assets/icons8-flutter-48.png"
import aqibPic from "../../assets/Screenshot_20220728-093308_WhatsApp.jpg"
import image2 from "../../assets/Screenshot_20230322-072442_DemoSchoolApp.jpg"
import image3 from "../../assets/Screenshot_20230430-231117_Retrofit_practice.jpg"
import image4 from "../../assets/SharedScreenshot.jpg"
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
 </div>
    )}
  </div>
  )
}

export default HomeBottom
