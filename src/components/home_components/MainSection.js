import React, { useEffect, useState } from 'react'
import "./mainsection.css"

import img from "../../assets/right-arrow.png"
import Icons from '../Icons'
import reactIcon from "../../assets/icons8-react-100.png"
import nodejsIcon from "../../assets/icons8-node-js-48.png"
import firebaseIcon from "../../assets/icons8-firebase-48.png"
import javaIcon from "../../assets/icons8-java-48.png"
import mongoDbIcon from "../../assets/icons8-mongodb-48.png"
import sqlIcon from "../../assets/icons8-my-sql-48.png"
import flutterIcon from "../../assets/icons8-flutter-48.png"
import aqibPic from "../../assets/Screenshot_20220728-093308_WhatsApp.jpg"
import axios from 'axios'

const MainSection = () => {


    const [languages,set_languages] = useState([]);

    useEffect(()=>{
    
    const get_languages= async()=>{
    
    try {
      
    const lang_data = await axios.get("https://aqib-portfolio.vercel.app/project_exp");
    
    set_languages(lang_data.data);
    
    
    } catch (error) {
      console.log(error)
    }
    
    
    }
    get_languages();
    
    },[]);
  
  return (
    <div className='main'>
      
<div className='container'>
    <div className='left'>
        <div className='top'>

<div className='headings'>
<div className='heading1'>
      <div className='typing'>
        <span>M AQIB ALI AWAN</span>
        <span className='cursor'></span> {/* This will simulate the typing cursor */}
      </div>
    </div>
<div className='heading2'>DEVELOPER
<div className='line'></div>
</div>
<div className='small_headings'>
    <div>WEBSITES</div>
    <div>MOBILE APPS</div>
    <div>FLUTTER</div>
    <div>APIs</div>
</div>
</div>


<div className='button'>
    <div className='text'>EXPLORE</div>
    <div className='arrow'>
        <img src={img}/>
    </div>
</div>
        </div>
        <div className='bottom'>

<dev className="icons" >

{
    languages.map((data)=>(
        <div className='icon_container'><Icons className="icon" img={data.icon}/>
<div className='icon_title'>
   {
    data.title
   }
</div>
</div>
    ))
}



</dev>
<div className='line'></div>
        </div>
    </div>
    <div className='right' >
        <img src={aqibPic} style={{width:"100%"}}  />
        
       <div className='bottom_banner1'></div> 
       <div className='bottom_banner2'></div> 
    </div>
</div>

    </div>
  )
}

export default MainSection
