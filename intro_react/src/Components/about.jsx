import React from "react";
import { Link } from "react-router-dom"

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    We are winners
                </h1>
                <Link to="/" className="homepage"> Voltar para homepage </Link>
            </div>
        )
    }    
}   

export default About