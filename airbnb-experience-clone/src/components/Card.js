import React from "react"
import photoexperience from "../images/katie-zaferes.png"
import star from "../images/star.png"


// can add images like {`path${imgnamrvar}`}

export default function Card(props){
    let badgeText
    if(props.openSpots===0){
        badgeText = "Sold-Out"
    } else if (props.country === "Online"){
        badgeText = "Online"
    }

    return <div className="experience-listing">
        {/* conditional display if there is badge text*/}
        {badgeText && <div className="experience-status">{badgeText}</div>}
        <img className="experience-img" src={props.img} alt={props.title}></img>
        <div className="review-div">
        <img className="star-img" src={star} alt="star"></img>
            <span className="rating">{props.rating}</span>
            <span className="review-count grey"> ({props.reviewcount}) * </span>
            <span className="country grey"> {props.country}</span>
            
        </div>
        {/* end review div */}
        <p className="experience-heading">{props.title}</p>
        <p className="experience-price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
        {/* holds one photo */}

    // holds all photos
}