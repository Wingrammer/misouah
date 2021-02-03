import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import ItemCard from './ItemCard'
import Loading from './Loading'
import './Realisations.css'

function Realisations() {

    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        setTimeout(()=>setLoading(false), 4000)
    
    }, [])

    return (
        <>
        {loading === true ? (<Loading/>) :    
        (
        <div>
            <div className="headerWrapper">
                <Header activetab={1}/>
                {/*
                <video autoplay="autoplay" loop>
                <source src="misouah.mp4" type="video/mp4"/>
                </video>*/}
                
                <div className="backBanner">
                <img src="./Slide-1.jpg"/>
                </div>
            </div>
            <div className="body">
                <div className="greenBox gre">
                    <h1>NOS REALISATIONS</h1>
                </div>
                <div className="listBox">
                    
                    <ItemCard 
                    image="./GIF-1_Misouah-toumodi-20.gif" 
                    imageFloat="right"
                    button={true}
                    filename = "./GRILLE-TARIFAIRE-TOUMODI.pdf"
                    buttonClass="greenButton mar"
                    details={
                        {
                            "spanText": "",
                            "colorText": "20 villas déjà construites sur le projet de 200 villas de Toumodi",
                            "detailText": "Pour plus de détails sur la villa et la grille tarifaire :",
                            "colorClass": "greenText"

                        }
                    }
                    
                    />
                    
                </div>
            </div>
            
            <Footer/>
        </div>)}
        </>
    )
}

export default Realisations
