import React from "react";

class Timer extends React.Component {
state = {
    counter: 0,
    phrases: ['  👨🏾‍💻 FOA', ' 👨🏿‍💻 Erick', ' ✔️ Lets code'],
    currentPhrases: 0,
}

componentDidMount() {
    const SECOND = 1000;
    
    setInterval(
        () => this.setState((previousState) => ({ counter: previousState.counter + 0.5})),
        SECOND,
    );
}

componentDidUpdate(_prevProps, prevState){
    const { counter, currentPhrases } = prevState;
    
    if( counter === 5 ) {
        this.setState({
            counter: 0,
            currentPhrases: currentPhrases < 2 ? currentPhrases + 1 : 0
        })
    }
}

render() {
    const {counter, phrases, currentPhrases} = this.state;
    return(
            <section>
                <h1>{ phrases[currentPhrases] }</h1>
                <h2 className="counter">{ counter } </h2>
            </section>
        )
    }
}
export default Timer; 