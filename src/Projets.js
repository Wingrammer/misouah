import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import ItemCard from './ItemCard'
import Loading from './Loading'
import "./Projets.css"

function Projets() {

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
                <Header activetab={2}/>
                {/*
                <video autoplay="autoplay" loop>
                <source src="misouah.mp4" type="video/mp4"/>
                </video>*/}
                
                <div className="backBanner">
                <img alt="banner" src="./Sans-titre-3.jpg"/>
                </div>
            </div>

            <div className="body">
                <div className="yellowBox yel">
                    <h1>LISTE DES PROJETS EN COURS</h1>
                </div>
                <div className="listBox">
                    <ItemCard 
                    image="./GIF-1_Misouah-toumodi.gif" 
                    imageFloat="left"
                    button={true}
                    filename = "./GRILLE-TARIFAIRE-TOUMODI.pdf"
                    buttonClass="yellowButton mar"
                    details={
                        {
                            "spanText": "Construction d’une cité de",
                            "colorText": "200 villas à Toumodi Rombo",
                            "detailText": "Pour plus de détails sur la villa et la grille tarifaire :",
                            "colorClass": "yellowText"

                        }
                    }
                    
                    />
                    <ItemCard 
                    image="./Sans-titre-3-min.gif" 
                    imageFloat="left"
                    button={true}
                    filename = "./GRILLE-TARIFAIRE-DABOU1.pdf"
                    buttonClass="yellowButton mar"
                    details={
                        {
                            "spanText": "Construction d’une cité de",
                            "colorText": "200 villas et plus à Dabou Pass II",
                            "detailText": "Pour plus de détails sur la villa et la grille tarifaire :",
                            "colorClass": "yellowText"

                        }
                    }
                    
                    />

<ItemCard 
                    image="./yopougon-académie.gif" 
                    imageFloat="left" 
                    details={
                        {
                            "spanText": "",
                            "colorText": "Immeuble R+4(2) à Yopougon Niangon",
                            "detailText": "",
                            "colorClass": "yellowText"

                        }
                    }
                    
                    />
                    <ItemCard 
                    image="./yopougon-ananeraie.gif" 
                    imageFloat="left" 
                    details={
                        {
                            "spanText": "",
                            "colorText": "Immeuble R+4(2) à Yopougon ananeraie",
                            "detailText": "",
                            "colorClass": "yellowText"

                        }
                    }
                    
                    />

                    <ItemCard 
                    image="./Sans-titre-3-min.gif" 
                    imageFloat="left"
                    yellowButton="greenButton mar"
                    details={
                        {
                            "spanText": "Construction de",
                            "colorText": "villas de haut standing à Abatta près du programme de la MUGEFCI",
                            "detailText": "",
                            "colorClass": "yellowText"

                        }
                    }
                    
                    />
                    <ItemCard 
                    image="./Sans-titre-3-min.gif" 
                    imageFloat="left"
                    buttonClass="yellowButton mar"
                    details={
                        {
                            "spanText": "Vente de",
                            "colorText": "terrains viabilisés à Abatta",
                            "detailText": "",
                            "colorClass": "yellowText"

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

export default Projets
