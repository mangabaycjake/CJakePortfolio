import React from "react"
import './Navbar.css'
import logo_black from '../../assets/logo-black.png'
import logo_white from '../../assets/logo-white.png'
import seaarch_icon_w from '../../assets/search-w.png'
import seaarch_icon_b from '../../assets/search-b.png'
import day from '../../assets/day.png'
import night from '../../assets/night.png'

const Navbar = ({theme, setTheme}) => {

    const toggle_mode = ()=>{
        theme == 'dark' ? setTheme('light') : setTheme('dark')

    }

  return (
    <>
      <div className="navbar">

        <img src={theme == 'dark' ? logo_white : logo_black} alt="" className="logo" />

        <ul>
          <li>Home</li>
          <li>Skill</li>
          <li>Projects</li>
          <li>GitHub</li>
        </ul>   

        <div className="search-box">
            <input type="text" placeholder="Search" />
            <img src={theme == 'dark' ? seaarch_icon_b : seaarch_icon_w} alt=""/>
        </div>

        <img onClick={()=>{toggle_mode()}} src={theme == 'dark' ? day : night} alt="" className="toggle-icon" />

      </div>
    </>
  )
}

export default Navbar
