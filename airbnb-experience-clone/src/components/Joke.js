import React from "react"

export default function Joke(props){
    return <div>
        {/* conditional formating below - only display if props.setup exists */}
       {props.setup && <h3>{props.setup}</h3>} 
        <p>{props.punchline}</p>
        <p>{props.number}</p>
    </div>
}