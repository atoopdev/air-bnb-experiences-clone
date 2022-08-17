import React from "react"
import photoexperience from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card(props){
    return <div className="experience-photos">
        <div className="experience-listing">
        <img className="experience-img" src={props.img} alt="Katie Zaferes in swimsuit/cap"></img>
        <div className="review-div">
        <img className="star-img" src={star} alt="star"></img>
            <span>{props.rating}</span>
            <span className="grey"> ({props.reviewcount}) * </span>
            <span className="grey"> {props.country}</span>
            
        </div>
        {/* end review div */}
        <p className="experience-heading">{props.title}</p>
        <p className="experience-price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
        {/* holds one photo */}

    </div>
    // holds all photos
}
