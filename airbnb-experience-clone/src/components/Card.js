import React from "react"
import photoexperience from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card(){
    return <div className="experience-photos">
        <div className="experience-listing">
        <img className="experience-img" src={photoexperience} alt="Katie Zaferes in swimsuit/cap"></img>
        <div className="review-div">
        <img className="star-img" src={star} alt="star"></img>
            <span>5.0</span>
            <span className="grey"> (6) * </span>
            <span className="grey">USA</span>
            
        </div>
        {/* end review div */}
        <p className="experience-heading">Life lessons with Katie Zaferes</p>
        <p className="experience-price"><span className="bold">From $136</span> / person</p>
        </div>
        {/* holds one photo */}

    </div>
    // holds all photos
}
