import React from "react"
// import felixcat from "../images/felix.png"
// import fluffycat from "../images/fluffykins.png"
// import whiskerscat from "../images/mr-whiskerson.png"
// import pumpkincat from "../images/pumpkin.png"
import mailicon from "../images/mail-icon.png"
import phoneicon from "../images/phone-icon.png"

export default function Contact(props){
    console.log(props)
     return <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>

            <div classname="info-group">
                <img src={phoneicon}></img>
                <p>{props.phone}</p>
            </div>
            {/* end info group */}
            <div className="info-group">
                <img src={mailicon}></img>
                <p>{props.email}</p>
            </div>
            </div>
            {/* end card */}

}