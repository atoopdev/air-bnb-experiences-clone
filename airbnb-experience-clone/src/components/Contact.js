import React from "react"
// import felixcat from "../images/felix.png"
// import fluffycat from "../images/fluffykins.png"
// import whiskerscat from "../images/mr-whiskerson.png"
// import pumpkincat from "../images/pumpkin.png"
import mailicon from "../images/mail-icon.png"
import phoneicon from "../images/phone-icon.png"

// destructure props - must use same names as passed in
// only do if easy to differentiate props variables from function variables
export default function Contact({img, name, phone, email}){
     return <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>

            <div classname="info-group">
                <img src={phoneicon}></img>
                <p>{phone}</p>
            </div>
            {/* end info group */}
            <div className="info-group">
                <img src={mailicon}></img>
                <p>{email}</p>
            </div>
            </div>
            {/* end card */}

}