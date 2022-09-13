import React from "react"
import photoexperience from "../images/katie-zaferes.png"
import star from "../images/star.png"


// can add images like {`path${imgnamrvar}`}

export default function Card(props){
    
    let badgeText
    if(props.card.openSpots===0){
        badgeText = "Sold-Out"
    } else if (props.card.country === "Online"){
        badgeText = "Online"
    }
    console.log(props.card)
    return <div className="experience-listing">
        {/* conditional display if there is badge text*/}
        {badgeText && <div className="experience-status">{badgeText}</div>}
        <img className="experience-img" src={props.card.coverImg} alt={props.card.title}></img>
        <div className="review-div">
        <img className="star-img" src={star} alt="star"></img>
            <span className="rating">{props.card.stats.rating}</span>
            <span className="review-count grey"> ({props.card.stats.reviewCount}) * </span>
            <span className="country grey"> {props.card.location}</span>
            
        </div>
        {/* end review div */}
        <p className="experience-heading">{props.card.title}</p>
        <p className="experience-price"><span className="bold">From ${props.card.price}</span> / person</p>
        </div>
        {/* holds one photo */}

    // holds all photos
}