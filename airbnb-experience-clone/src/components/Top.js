import React from "react"
import logo from "../images/airbnb-logo.png"
import photogrid from "../images/photo-grid.png"

export default function Top(){
    return <header>
        <nav className="nav-bar"><img src={logo} className="logo-img" alt="airbnb logo"></img></nav>
        <section className="hero">
        <img src={photogrid} className="hero-img" alt="photo collage"></img>
        <h1 className="hero-header"> Online Experiences</h1>
        <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p></section>
    </header>
}
