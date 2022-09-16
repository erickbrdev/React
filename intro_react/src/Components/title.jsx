import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeroTitle extends Component {
    render() {
        return (
            <div>
                <h1>React  is amazing</h1>
                <Link to="/about" className="about"> About </Link>
            </div>
        )
    }
}

export default HeroTitle;