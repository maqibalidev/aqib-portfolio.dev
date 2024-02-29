import React, { useEffect, useState } from 'react';
import './slider.scss';
import img from "../../assets/icons8-flutter-48.png"
import Icons from '../Icons';
import axios from 'axios';

const slides = [
  require('../../assets/blank_smartphone_mockup_isolate_on_background.jpg'),
  require('../../assets/Screenshot_20230322-072442_DemoSchoolApp.jpg'),
  require('../../assets/Screenshot_20230430-231117_Retrofit_practice.jpg'),
  require('../../assets/Screenshot_20230322-072112_Tamir_project.jpg'),
  require('../../assets/SharedScreenshot.jpg')
];

const SliderComponent = ({detail_page,sub_heading,data}) => {


  const [currSlide, setCurrSlide] = useState(0);

  const width=window.screen.width;
  const totalSlides = data && data.length >0 && detail_page ? data[0].screen.length : data.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrSlide((currSlide + 1) % totalSlides);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currSlide, totalSlides]);

  const handleDotClick = (index) => {
    setCurrSlide(index);
  };

  return (
    <div className="slider" >
      <div className="container">
        <div className="images" style={{ padding:detail_page?"50px 0px":"",borderBottomLeftRadius:detail_page?width<500?"100px":"300px":"none"}}>
        {
!detail_page ? (
 data && data.length>0 ?
 data.map((slide, index) => (
  <div
    key={index}
    className="image"
    style={{
      left: currSlide === index ? '0' : `${100 * (index - currSlide)}vw`,
      opacity: currSlide === index ? '1' : '0',
    }}
  >
    <img className='slider_img' src={slide.img} alt={`Slide ${index + 1}`} style={{left:width>500?"":"0px",right:detail_page?width>500?"120px":"0px": width>500?"5vw":"0px",width:slide.type===1?"600px":""}} />
    <div className='slider_left' style={{padding:"20px", border:detail_page?"none": "1px solid rgba(255, 255, 255, 0.185)", left:detail_page?"200px":"100px",  opacity: currSlide === index ? '1' : '0' }}>
      <div className='slider_text' style={{ marginLeft:"30px",fontSize:"30px"}}>{slide.project_name}
      <div className='slider_text' style={{fontSize:"14px", opacity:"0.7"}}>{slide.project_desc}</div>

      </div>
      {
          <div className='slider_project_icons'>
        {slide.languages.map((data, i) => (
          <Icons key={i} img={data.icon} size={width>500?40:30} />
        ))}
      </div>
      }

    </div>
  </div>
)):(
  <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"50px 0px", width:"100vw"}}>
  <div className='circular_progress'></div>
  </div>
)
 
)
:(

 data && data.length>0 && data[0].screen.map((slide, index) => (
  <div
    key={index}
    className="image"
    style={{
      left: currSlide === index ? '0' : `${100 * (index - currSlide)}vw`,
      opacity: currSlide === index ? '1' : '0',
    }}
  >
    <img className='slider_img' src={slide.img} alt={`Slide ${index + 1}`} style={{left:width>500?"":"0px",right:detail_page?width>500?"120px":"0px": width>500?"200px":"0px",width:slide.type===1?"600px":""}} />
    <div className='slider_left' style={{ border:detail_page?"none": "1px solid rgba(255, 255, 255, 0.185)", left:detail_page?"200px":"100px",  opacity: currSlide === index ? '1' : '0' }}>
      <div className='slider_text' style={{ marginLeft:"30px",fontSize:"30px"}}>{slide.title}
      <div className='slider_text' style={{fontSize:"14px", opacity:"0.7"}}>{slide.description}</div>

      </div>

   
    </div>
  {
    !width >500 &&   <div className='sp' style={{color:"white",position:"absolute",bottom:"100px", backgroundColor:"rgba(0, 0, 0, 0.116)",width:"100%",padding:"100px,20px",display:"flex",justifyContent:"center"}}> 
    <div className='slider_tex' style={{fontSize:"30px"}}>{slide.title}
      <div className='slider_tex' style={{fontSize:"14px", opacity:"0.7"}}>{slide.description}</div>

      </div>


    </div> 
  }
  </div>
))

)

        }
          <div className='dots_container' style={{marginBottom:detail_page?"40px":""}}>
           {
            !detail_page ? (
              data && data.length>0 &&data.map((_, index) => (
                <div
                  key={index}
                  className={currSlide === index ? 'dot active' : 'dot'}
                  onClick={() => handleDotClick(index)}
                ></div>
              ))
            )
            :(
              data && data.length>0 &&data[0].screen.map((_, index) => (
                <div
                  key={index}
                  className={currSlide === index ? 'dot active' : 'dot'}
                  onClick={() => handleDotClick(index)}
                ></div>
              ))
            )
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
