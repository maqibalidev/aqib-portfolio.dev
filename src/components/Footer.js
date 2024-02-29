import React from 'react'
import "./footer.scss"
import img from "../assets/right-arrow.png"
import Icons from './Icons'
import githhub from "../assets/icons8-github-48.png"
import linkedIn from "../assets/icons8-linked-in-48.png"
import instagram from "../assets/icons8-instagram-48.png"
import facebook from "../assets/icons8-facebook-48.png"
import mongoDbIcon from "../assets/icons8-mongodb-48.png"
import sqlIcon from "../assets/icons8-my-sql-48.png"
import flutterIcon from "../assets/icons8-flutter-48.png"
import aqibPic from "../assets/Screenshot_20220728-093308_WhatsApp.jpg"
const Footer = () => {
  return (
    <div className='footer'>
      
      <dev className="footer_icons">
<div className='icon_container'><Icons className="icon" img={githhub}/>
<div className='icon_title'>
    Github
</div>
</div>
<div className='icon_container'><Icons className="icon" img={linkedIn}/>
<div className='icon_title'>
    LinkedIn
</div>
</div>
<div className='icon_container'><Icons className="icon" img={facebook}/>
<div className='icon_title'>
    Facebook
</div>
</div>
<div className='icon_container'><Icons className="icon" img={instagram}/>
<div className='icon_title'>
    Instagram
</div>
</div>







</dev>
      
    </div>
  )
}

export default Footer
