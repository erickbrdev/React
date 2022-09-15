import React from "react"
import './App.css';
import Timer from "./Components/components";
class App extends React.Component {
  
  state = {
    showTimer: false,
  }


handleClick = () => {
  this.setState((prevState) => ({ showTimer: !prevState.showTimer }))
};

render () {
  const { showTimer } = this.state
  return (
    <div className="div-flex">
      <header className="header-container">
        <img 
          src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif" 
          className="image"
          alt="Gamer" 
        />
      </header>
      {
        showTimer && <Timer />
      }
      <button 
        className="button-onOff"
        type="button"
        onClick={this.handleClick}
      >
          { showTimer ? 'Desligar' : 'Ligar'}
      </button>
    </div>
    );
  }
}

export default App;
