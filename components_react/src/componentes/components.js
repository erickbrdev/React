import React, { Component } from "react";
import PropTypes from "prop-types"
import bpt from "./data";

class InfoPerson extends Component {
    render() {   
         const info = bpt         
        return (
             info.map((person) => {
                return  <div>
                            <h1> Nick: { person.nick } </h1>
                            <h2> Classe: { person.classe } </h2>
                            <p>  Level: { person.level } </p>
                        </div>
            })
        )
    }
}

InfoPerson.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

export default InfoPerson