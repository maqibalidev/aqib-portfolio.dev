import React, { useEffect, useState } from 'react'
import Items from "../components/expericene_components/Exp_items"

import "./experience.scss"
import Header from '../components/Header'
import Footer from "../components/Footer"
import SliderComponent from '../components/progects_components/Slider_component'
import axios from 'axios'
const Experience = () => {

const [languages,setLang] = useState([]);
const [slider_data,set_sliderData] = useState([]);


useEffect(()=>{

const getData = async()=>{

const res =await axios.get("http://localhost:8080/project_slider");

set_sliderData(res.data);

}
getData();

},[]);

useEffect(()=>{

  const getExpericene = async()=>{


const res= await axios.get("http://localhost:8080/project_exp");
console.log(res.data)
setLang(res.data);

  }

  getExpericene();
},[]);


  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])

const images = [

  languages.map((data)=>(
    {img: data.icon,
name :data.title,
percent: data.experience

}
  ))


  

]

  return (
    <>
    <Header active_item={2}/>
    <div className='experience'>
      


<div className='experience_heading' style={{color:"white",fontSize:"24px"}}>EXPERIENCE</div>


<div className='exp_items' >

{languages && languages.length>0?languages.map((item)=> (
<div className='exp_icons_container'><Items icon={item.icon} percent={item.experience} name={item.title}/></div>
)
):(
  <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"50px 0px", width:"100vw"}}>
  <div className='circular_progress'></div>
  </div>
  
                )}
  
</div>

<div className='experience_heading' style={{color:"white",fontSize:"24px"}}>PROJECTS</div>

<SliderComponent detail_page={false} data={slider_data}/>
    </div>
 <Footer/>
    </>
  )
}

export default Experience
