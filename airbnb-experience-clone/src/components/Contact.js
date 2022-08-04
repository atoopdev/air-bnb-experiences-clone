import React from "react"
import felixcat from "../images/felix.png"
import fluffycat from "../images/fluffykins.png"
import whiskerscat from "../images/mr-whiskerson.png"
import pumpkincat from "../images/pumpkin.png"
import mailicon from "../images/mail-icon.png"
import phoneicon from "../images/phone-icon.png"

export default function Contact(props){
     return <div className="contacts">

        <div className="contact-card">
            <img src={whiskerscat}></img>
            <h3>Mr. Whiskerson</h3>

            <div classname="info-group">
                <img src={phoneicon}></img>
                <p>555-555-5555</p>
            </div>
            {/* end info group */}
            <div className="info-group">
                <img src={mailicon}></img>
                <p>mr.whiskers@catnip.meow</p>
            </div>

            </div>

            <div className="contact-card">
            <img src={fluffycat}></img>
            <h3>Fluffy</h3>

            <div classname="info-group">
                <img src={phoneicon}></img>
                <p>555-555-5555</p>
            </div>
            {/* end info group */}
            <div className="info-group">
                <img src={mailicon}></img>
                <p>fluffy@catnip.meow</p>
            </div> 
        </div>
        {/* end contact card */}

        <div className="contact-card">
            <img src={felixcat}></img>
            <h3>Felix</h3>

            <div classname="info-group">
                <img src={phoneicon}></img>
                <p>555-555-5555</p>
            </div>
            {/* end info group */}
            <div className="info-group">
                <img src={mailicon}></img>
                <p>felix@catnip.meow</p>
            </div> 
        </div>
        {/* end contact card */}

        <div className="contact-card">
            <img src={pumpkincat}></img>
            <h3>Pumpkin</h3>

            <div classname="info-group">
                <img src={phoneicon}></img>
                <p>555-555-5555</p>
            </div>
            {/* end info group */}
            <div className="info-group">
                <img src={mailicon}></img>
                <p>pumpkin@catnip.meow</p>
            </div> 
        </div>
        {/* end contact card */}
    </div>
    // end contacts div
}