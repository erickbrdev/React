import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    render() {
        const { title } = this.props
        // const { name } = this.props.match.params
        return (         
            <div>
                <h1> React JS { title }</h1>
                <Link to="/" className="homepage"> Voltar para homepage </Link>
            </div>               
        )
    }
}

export default HomePage