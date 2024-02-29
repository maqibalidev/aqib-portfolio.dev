import React, { useEffect, useState } from 'react'
import SliderComponent from '../components/progects_components/Slider_component'
import Projects_details_parts from '../components/project_detail_components/Projects_details_parts'
import axios from 'axios';
import { useLocation, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';

const Projects_detai_page = () => {

    const location = useLocation();
    ;
const [detailPage,setDetail]=useState([]);
const [front_end,setFrontend]=useState([]);
const [beckend,setBeckend]=useState([]);
const [db,setDb]=useState([]);

useEffect(()=>{
const url = new URLSearchParams(location.search);
const getData = async()=>{

const res= await axios.get("https://aqib-portfolio.vercel.app/project_screens?project_id="+url.get("project_id"));
const res_frontend= await axios.get("https://aqib-portfolio.vercel.app/project_screens_language?project_id="+url.get("project_id")+"&type=FRONTEND");
const res_beckend= await axios.get("https://aqib-portfolio.vercel.app/project_screens_language?project_id="+url.get("project_id")+"&type=BECKEND");
const res_db= await axios.get("https://aqib-portfolio.vercel.app/project_screens_language?project_id="+url.get("project_id")+"&type=DATABASE");

setDetail(res.data);
setFrontend(res_frontend.data);
setBeckend(res_beckend.data);
setDb(res_db.data);
}

getData();

},[]);

    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])


const languages=[

{
        heading:"FRONTEND",
        sub_heading:front_end.map((dat)=>{
     
               return {
                img: dat.icon?dat.icon:"",
                text:dat.title?dat.title:"NOT DEFINED"
               }
        })
        
    },
    
    {
        heading:  "BECKEND",
        sub_heading: beckend.map((dat)=>{
            
               return {
                img: dat.icon,
                text:dat.title
               }
        })
        
    },
    {
        heading:"DATABASE",
        sub_heading:db.map((dat)=>{
            console.log(dat)
            
               return db[0] !==undefined ? {
                img: dat.icon,
                text:dat.title
               }:{
                img: "DSADASS",
                text:"FDSFSDFS"
               }
        })
        
    },
]

    






  return (
    
    <div style={{marginBottom:"200px"}}>
       <Header />
      <SliderComponent detail_page={true} data={detailPage}/>


<div className='project_detail_page_heading' style={{color:"white",fontSize:"30px",margin:"20px 100px",textAlign:"center"}}>School App</div>

<Projects_details_parts items={languages}/>


    </div>
  )
}

export default Projects_detai_page
