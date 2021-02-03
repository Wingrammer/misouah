import React from 'react'
import { useMediaQuery } from 'react-responsive'
import "./ItemCard.css"

function ItemCard({image, details, imageFloat, button,filename, buttonClass}) {

    const isSmallScreen = useMediaQuery({
        query: '(max-width: 1330px)'
    })

    return (
        
        <div className="wrapper">
        
            {imageFloat==="left" ?
            <>
            <img alt="Villa" src={image} width="50%"/>
            <div className="detailsContainer">
                <div>{details.spanText}</div>
                <div className={details.colorClass}>{details.colorText}</div>                
                <div style={{color: "#878686"}}>{details.detailText}</div>
                {button === true ? 
                <div className = {buttonClass}><a href={filename} download>Cliquez ici</a></div> : 
                <span></span>}
            </div> </>:
            <>
            
            <div className="detailsContainer" style={{width:!isSmallScreen && "47%"}}>
                <div>{details.spanText}</div>
                <div className={details.colorClass}>{details.colorText}</div>                
                <div style={{color: "#878686"}}>{details.detailText}</div>
                {button === true ? 
                <div className = {buttonClass}><a href={filename} download>Cliquez ici</a></div> : 
                <span></span>}
            </div>
            <img alt="Villa" src={image} width="50%"/></>
            }
        </div>
        
    )
}

export default ItemCard
{/*<div className="wrapper">
            <div className="imageContainer" style={{order: imageOrder}}>
                <img alt="images" src={image}/>
            </div>
            <div className="detailsContainer" style={{order: detailsOrder}}>
                <div className="detailTitle" style={{marginTop: !button && "10%"}}>
                    <div>{details.spanText}</div>
                    <div className={details.colorClass}>{details.colorText}</div>
                </div>
                <div style={{color: "#878686"}}>{details.detailText}</div>
                {button === true ? 
                <a className = {buttonClass} href={filename} download>Cliquez ici</a> : 
                <span></span>}
            </div>
        </div>*/}{/* <div>{details.spanText}</div>
                <div className={details.colorClass}>{details.colorText}</div>                
                <div style={{color: "#878686"}}>{details.detailText}</div>
                {button === true ? 
                <a className = {buttonClass} href={filename} download>Cliquez ici</a> : 
                <span></span>}*/}