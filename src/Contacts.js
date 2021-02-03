import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import "./Contacts.css"
import MapContainer from './GoogleMap'
import Loading from './Loading'
import{ init, send } from 'emailjs-com';



function Contacts() {

    init("user_IcXWUvGlo4tBrvw4CDQYT");
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        setTimeout(()=>setLoading(false), 4000)
    
    }, [])

    const [nom, setNom] = useState("")
    const [contact, setContact] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const templateParams = {
        from_name: nom,
        contact: contact,
        to_name: "Misouah",
        message: message
    }

    const sendEmail = () => {
        send('service_xciommt', 'template_i6vd1rm', templateParams)
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message Envoyé")
        }, function(error) {
        console.log('FAILED...', error);
        });
        setContact("");
        setEmail("");
        setMessage("");
        setNom("");
    }

    return (

        <>
        {loading === true ? (<Loading/>) :    
        (
        <div>
            <div className="headerWrapper">
                <Header activetab={3}/>
                {/*
                <video autoplay="autoplay" loop>
                <source src="misouah.mp4" type="video/mp4"/>
                </video>*/}
                
                <div className="bigBackBanner">
                <img alt="banner" src="./Slide-20.jpg"/>
                </div>
            </div>
            <div className="body contact-body">
                <div className="contact hor">
                    <h2><span>NOS CONTACTS</span></h2>
                    <div className="contactIcon">
                        <div className="squareMainFooter">
                            <img alt="coordonees" src="Icone_appel-min.png"/>
                            <p>(+225) 22 42 69 72 / 49 54 54 62 / 07 19 62 55 </p>
                        </div>
                        <div className="squareMainFooter">
                            <img alt="coordonees" src="Icone_mail-min.png"/>
                            <p>misouah2018@gmail.com</p>
                        </div>
                        <div className="squareMainFooter">
                            <img alt="coordonees" src="Icone_localisation-min.png"/>
                            <p>Cocody, Boulevard Latrille Carrefour Las Palmas</p>
                        </div>
                    </div>
                </div>
                
                <div className="contactForm">
                    <div className="mainContactForm">
                    <div className="formGroup">
                    <label>Nom & Prénoms</label>
                    <input type="text" value={nom} onChange={(e) => setNom(e.target.value)}/>
                    </div>
                    <div className="formGroup">
                    <label>Contact</label>
                    <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)}/>
                    </div>
                    <div className="formGroup">
                    <label>Addresse E-mail</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="formGroup">
                    <label>Votre Message</label>
                    <textarea  value={message} onChange={(e) => setMessage(e.target.value)}/>
                    </div>
                    <div className="formGroup">
                    <button onClick={sendEmail}>Envoyer le message</button>
                    </div>
                    </div>
                    
                </div>
                
                
                
                
                
            </div>
            <Footer/>
        </div>)
        }
        </>
    )
}

export default Contacts
