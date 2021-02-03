import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import './Accueil.css'
import Loading from './Loading'


function Accueil() {

    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        setTimeout(()=>setLoading(false), 4000)
    
    }, [])

    return (
        <>
        {loading === true ? (<Loading/>) :    
        (<div className="Accueil">
            <div className="headerWrapper">
                <Header activetab={0}/>
                
                <video autoplay="autoPlay" loop muted playsInline src="misouah.mp4"></video>
                
                {/*<div className="bigBackBanner">
                <img alt="video" src="./Image27.png"/>
                </div>*/}
            </div>

            <div className="body">
                <div className="yellowBox">
                    <div className="yellowBoxQuest">
                        <div className="qui">
                            QUI
                        </div>
                        <div className="rest">
                            NOUS SOMMES ?
                        </div>
                    </div>
                    <div className="yellowBoxAns">
                    Conscient qu’avoir un toit est un souci pour toute famille, MI SOUAH promoteur immobilier se propose d’être une alternative de choix dans cette ruée à l’acquisition immobilière
                    </div>
                </div>
                <div className="visions hor">
                    <h2><span>NOTRE VISION</span></h2>
                    <h3>Rehausser l’image de l’immobilier en côte d’ivoire</h3>
                    <b/><b/>
                    <h2><span>NOS SERVICES</span></h2>
                </div>
                <section className="services no-hor">
                    
        
                    <div className="servicesCards">
                        <div className="card">
                            <img alt="icone_house" src="./icone_house-min.png"/>
                            <p>Ventes de terrains
                            viabilisés ou
                            non avec tous les
                            documents afférents</p>
                        </div>
                        <div className="card">
                            <img alt="icone_house" src="./icone_house-min.png"/>
                            <p>Gestion de biens
                            immobiliers</p>
                        </div>
                        <div className="card">
                            <img alt="icone_house" src="./icone_house-min.png"/>
                            <p>Promotion immobilière</p>
                        </div>
                        <div className="card">
                            <img alt="icone_house" src="./icone_house-min.png"/>
                            <p>Aménagement foncier</p>
                        </div>
                        <div className="card">
                            <img alt="icone_house" src="./icone_house-min.png"/>
                            <p>Lotissements</p>
                        </div>
                        <div className="card">
                            <img alt="icone_house" src="./icone_house-min.png"/>
                            <p>Génie civil</p>
                        </div>
                    </div>
                </section>
                <div className="partenaires hor">
                    <h2><span>NOS PARTENAIRES</span></h2>
                    <div className="partLogo">
                        <img alt="partenaire" src="logo-2i-tra-min.png"/>
                        <img alt="partenaire" src="Uniprest-min.png"/>
                        <img alt="partenaire" src="Prestige_service-min.png"/>
                        <img alt="partenaire" src="Univers-services-min.png"/>

                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>)}
        </>
    );
}

export default Accueil
