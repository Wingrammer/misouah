import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Loading from './Loading'
import './ModeAcq.css'

function ModeAcq() {

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
                <Header activetab={4}/>
                {/*
                <video autoplay="autoplay" loop>
                <source src="misouah.mp4" type="video/mp4"/>
                </video>*/}
                
                <div className="bigBackBanner">
                <img alt="banner" src="./Slide-4.jpg"/>
                </div>
            </div>
            <div className="mbody">
            <h3 className="cond">CONDITIONS GENERALES D’ACQUISITION</h3>

            <ul>
                <p>1. A la réservation, l’acquéreur ou le réservataire devra verser un apport minimum de 30% contre signature d’un contrat de réservation selon le type de villa.</p>

                <p>2. Le solde (les 70% restants) pourra être reglé selon un échéancier de  36 mois à compter de la date de réservation.</p>

                <p>3. Le client pourra choisir les différents modes de paiements suivants :<br/>
                • Paiement direct ou cash
                • Paiement échelonné (36 mois maximum)</p>

                <p>4. La livraison de la maison ne se fera qu’après paiement du solde.</p>
            </ul>

            <h3>NB :</h3>
            <p>1- Les frais de dossier sont non remboursables en cas de désistement du client.</p>

            <p>2- Les prix ci-dessus indiqués sont déterminés hors frais notariés et hors frais de terrain supplémentaire. Les frais notariés restent à la charge du client, il devra directement les régler au notaire indiqué. </p>

            <p>3- En cas de non règlement au bout des 36 mois, une majoration sera appliquée sur le prix  total de la maison selon le coût actualisé des materiaux de construction.</p>

            <div className="greenText dev">Pour toutes informations complémentaires</div>
            <Link to="/contacts" className="greenButton-mod">Contactez-nous</Link>
            </div>
            <Footer/>
        </div>)}
        </>
    )
}

export default ModeAcq
