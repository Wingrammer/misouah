import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Tab from './Tab'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'


function Header({activetab}) {
    const icons =[faBars, faTimes]
    const navStates =["none", "flex"]
    const [iconIndex, setIconIndex] = useState(0)
    const handleMenu = () => 
        {
            setIconIndex(Math.abs(iconIndex-1))

        }
    const isSmallScreen = useMediaQuery({
        query: '(max-width: 940px)'
    })

    return (
        <div className="header">
            <div className="brandHeader">
            <a href="/" className="logoLink">
                <img className="logo" src="./misouahr.png"/>
                </a>
            </div>
            
            <div className="navbar" style={{display: isSmallScreen && navStates[iconIndex]}}>
                <Link to="/"><Tab active={activetab===0} title= "Accueil"/></Link>                
                <Link to="/projets"><Tab active={activetab===2} title="Projets en cours"/></Link>
                <Link to="/realisations"><Tab active={activetab===1} title="Nos réalisations"/></Link>
                <Link to="/acquisitions"><Tab active={activetab===4} title="Mode d'acquisition"/></Link>
                <Link to="/contacts"><Tab active={activetab===3}title="Contactez-nous"/></Link>
            </div>
            <FontAwesomeIcon icon = {icons[iconIndex]} onClick={handleMenu} className="fa"/>
        </div>
    )
}

export default Header
