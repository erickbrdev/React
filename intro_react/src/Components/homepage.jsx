import React from "react";

class HomePage extends React.Component {
    render() {
        const { title } = this.props
        // const { name } = this.props.match.params
        return (            
            <h1> React JS { title }</h1>
        )
    }
}

export default HomePage