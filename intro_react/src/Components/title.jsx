import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeroTitle extends Component {
    render() {
        return (
            <div>
                <h1>React  is amazing</h1>
                <div className="div-link">
                    <Link to="/about" className="about"> About </Link>
                    <Link to="/home" className="about"> Home </Link>                   
                </div>
            </div>
        )
    }
}

export default HeroTitle;