import React from 'react'
import './Footer.css'

function Footer() {

    return (
        <div className="footer">
            <div className="mainFooter">
                <div className="leftMainFooter">
                    <div className="brandMainFooter">
                        
                        <img className="logo" src="./misouah.png"/>
                                           
                        <span className="yellowText slogan">Vous méritez un logement de rêve.</span>
                    </div>
                    <div className="bodyMainFooter">
                    Conscient qu’avoir un toit est un souci pour toute famille, <br/>MI SOUAH promoteur immobilier se propose d’être <br/>une alternative de choix dans cette ruée à l’acquisition immobilière
                    </div>
                </div>
                
                <div className="rightMainFooter">
                    
                    <div className="squareMainFooter">
                        <a className="squareMainFooterLink" href="https://www.facebook.com/misouahimmobilier">
                            <img alt="coordonees" src="facebook.png"/>
                        </a>
                    </div>
                    <div className="squareMainFooter">
                        <a className="squareMainFooterLink" href="https://www.instagram.com/misouahimmobilier/">
                            <img alt="coordonees" src="inst.png"/>
                        </a>
                    </div>
                    <div className="squareMainFooter">
                        <a className="squareMainFooterLink" href="#">
                            <img alt="coordonees" src="twit.png"/>
                        </a>
                    </div>
                    
                </div>
            </div>
            <div className="copyrightFooter">
                <span className="brandFooter yellowText">MI SOUAH </span> &nbsp; &copy; 2021 - All rights reserved.
            </div>
            
        </div>
    )
}

export default Footer
