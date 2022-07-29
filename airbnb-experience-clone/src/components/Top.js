import React from "react"
import logo from "../images/airbnb-logo.png"
import photogrid from "../images/photo-grid.png"

export default function Top(){
    return <header>
        <nav className="nav-bar"><img src={logo} className="logo-img" alt="airbnb logo"></img></nav>
        <img src={photogrid} className="hero-img" alt="photo collage"></img>
    </header>
}
