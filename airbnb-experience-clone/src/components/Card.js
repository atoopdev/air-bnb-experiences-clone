import React from "react"
import photoexperience from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card(){
    return <div className="experience-photos">
        <div className="experience-listing">
        <img className="experience-img" src={photoexperience} alt="Katie Zaferes in swimsuit/cap"></img>
        <div className="review-div">
        <img className="star-img" src={star} alt="star"></img>
        <span className="review-details">5.0 (6) * USA</span>
        </div>
        {/* end review div */}
        <p className="experience-heading">Life lessons with Katie Zaferes</p>
        <p className="experience-price"><span className="bold">From $136</span> / person</p>
        </div>

    </div>
}
