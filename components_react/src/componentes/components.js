import React, { Component } from "react";
import PropTypes from "prop-types"

class InfoPerson extends Component {
    render() {
        const hobbies = ['Futebol', 'Teclado musical', 'Games']
        const { name, age } = this.props
        const map = hobbies.map((hobbie, index) => <li key={index}>{hobbie}</li> )
        return (
            <div>
                <h2>{name}</h2>
                <p>{age}</p>
                <h4>Hobbies: {map}                    
               </h4>
            </div>
        )
    }
}

InfoPerson.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

export default InfoPerson