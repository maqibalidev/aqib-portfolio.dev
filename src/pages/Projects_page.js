import React, { useEffect, useState } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./projects_page.scss"
import img1 from "../assets/Screenshot_20230322-072112_Tamir_project.jpg"
import img2 from "../assets/SharedScreenshot.jpg"
import img3 from "../assets/Screenshot_20230322-072442_DemoSchoolApp.jpg"
import img4 from "../assets/Screenshot_20230430-231117_Retrofit_practice.jpg"
import axios from "axios"


import Projects_items from '../components/projects_components/Projects_items'
import { Link } from 'react-router-dom'
const Projects_page = () => {
  const [projects,set_projects] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
const [language,setLang]=useState([]);
  useEffect(()=>{

    const getExpericene = async()=>{
  
  
  const res= await axios.get("http://localhost:8080/project_exp");
  console.log(res.data)
  setLang(res.data);
  
    }
  
    getExpericene();
  },[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/projects");
        set_projects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    window.scrollTo(0, 0)
    }, []);

    const handleLanguageChange = (event) => {
      setSelectedLanguage(event.target.value);
    };

   
    return (
      <>
        <Header active_item={3} />
        <div className='projects_page'>
          <div className='projects_heading'>PROJECTS</div>
          <div className='projects_filters_container'>
            <div className='projects_filter_select'>
              <div className="filters">
                <span>FILTERS: </span>
                <select name="languages" id="languages" onChange={handleLanguageChange}>
                  <option selected disabled value="">LANGUAGES</option>
                  {
                    language && language.length>0 &&
                    language.map((data,index)=>(
                   
                      <option key={index} value={data.title}>{data.title}</option>
                    
                    ))
                  }
                  {/* <option value="java">Java</option>
                  <option value="javascript">Javascript</option>
                  <option value="react">React</option>
                  <option value="nodejs">Nodejs</option> */}
                </select>
                
              </div>
            </div>
          </div>
          <div className='projects_page_items_container'>
            {projects && projects.length >0 ? projects
              .filter((project) => {
                 return !selectedLanguage || project.languages.some((lang) => {
                  return  lang.title === selectedLanguage})})
              .map((project, index) => (
                <Link to={"/project_details?project_id="+project.project_id} key={index}>
                  <Projects_items img={project.img} name={project.project_name} icons={project.languages.map(lang => lang)} />
                </Link>
              )):(
<div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"50px 0px"}}>
<div className='circular_progress'></div>
</div>

              )}
          </div>
        </div>
        <Footer />
      </>
    );
    
}

export default Projects_page
