import React, { useEffect } from 'react'
import Header from '../components/Header'
import MainSection from '../components/home_components/MainSection'
import HomeMiddle from '../components/home_components/HomeMiddle'
import HomeBottom from '../components/home_components/HomeBottom'
import Footer from '../components/Footer'
import Slider from '../components/progects_components/Slider_component'
import { SliderData } from '../components/progects_components/SliderData'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])
  return (
    <div className='home'>
      <Header active_item={1}/>
      <MainSection/>
      <HomeMiddle/>
      <HomeBottom/>
      {/* <Slider slides={SliderData}/> */}
      <Footer/>
    </div>
  )
}

export default Home
