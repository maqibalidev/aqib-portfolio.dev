import React from 'react'
import img from "../assets/Screenshot_20220728-093308_WhatsApp.jpg"
import "./about.scss"
import Icons from '../components/Icons'
import githhub from "../assets/icons8-github-48.png"
import linkedIn from "../assets/icons8-linked-in-48.png"
import instagram from "../assets/icons8-instagram-48.png"
import facebook from "../assets/icons8-facebook-48.png"
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const About = () => {
    return (
        <div>
               <Header active_item={4}/>
            <div className='about_top'>

                <img src={img} />
                <div className='profile_name'>
                    M AQIB ALI AWAN
                </div>
                <div className='links'>
                    <div className="about_icons">
                        <Link to={"https://github.com/maqibalidev"} target="_blank">
                        <div className='icon_container'><Icons className="icon" img={githhub} />
                            <div className='icon_title'>
                                Github
                            </div>
                        </div>
                        </Link>
                        <div className='icon_container'><Icons className="icon" img={linkedIn} />
                            <div className='icon_title'>
                                LinkedIn
                            </div>
                        </div>
                        <div className='icon_container'><Icons className="icon" img={facebook} />
                            <div className='icon_title'>
                                Facebook
                            </div>
                        </div>
                        <div className='icon_container'><Icons className="icon" img={instagram} />
                            <div className='icon_title'>
                                Instagram
                            </div>
                        </div>
                    </div>
                  

                </div>
            </div>

            <div className='about_bottom'>



            <div className='heading'>
    INTRODUCTION
</div>
<p className='text'>
   <div> <p>NAME -</p>   <div>M AQIB ALI AWAN</div></div>
   <div> <p>Email -</p>  <div>maqibali608@gmail.com</div></div>
   <div> <p>Date of Birth -</p>   <div>24 Nov 2002</div></div>
   <div> <p>Contact -</p>   <div>+92 3207043815</div></div>
   <div> <p>City -</p>   <div>Sargodha</div></div>
</p>
<div className='heading'>
    EDUCATION
</div>
<p className='text'>
   <div> <p>Degree -</p>   BSIT ( 2 years completed )</div>

</p>

                    </div>
<Footer></Footer>
        </div>
    )
}

export default About
