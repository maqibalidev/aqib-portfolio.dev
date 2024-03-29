import React, { useEffect, useState } from 'react'
import "./home_middle.css"
import ImageIcon from '../ImageIcon'
import img from "../../assets/right-arrow.png"

import { Link } from 'react-router-dom'
import axios from 'axios'
const HomeMiddle = () => {
  const [app_data,set_app_data] = useState([]);

useEffect(()=>{

const get_apps= async()=>{

try {
  
const data = await axios.get("https://aqib-portfolio.vercel.app/mobile_projects");

set_app_data(data.data);


} catch (error) {
  console.log(error)
}


}
get_apps();

},[]);

  return (
    <div className='middle'>
      
      <div className='line'></div>

      <div className='container'>
        <div className='top'>
            <div className='heading'>
                APPLICATIONS
                <div className='middle_line'></div>
            </div>
           
        </div>
        <div className='center'>

{
  app_data && app_data.length>0 ? (app_data.map((data)=>(
    <ImageIcon className="img_1" image={data.screen_img} icon={data.language_icon}/>
  ))):(
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"50px 0px", width:"100vw"}}>
    <div className='circular_progress'></div>
    </div>
    
                  )
}

        </div>
        <div className='_bottom'>
        <Link to={"/projects"} style={{zIndex:"99"}}>
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
  )
}

export default HomeMiddle
