import React from 'react';
import './App.css';
class App extends React.Component {
  
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this) 
    
    this.state = {
      click: 0,
    };
  }
   handleClick () {
    this.setState((previousState, _props) => ({
      click: previousState.click +1
    }));
  };
  
  render() {
    const { click } = this.state
    return (
      <div>
        <button onClick={this.handleClick}>{click}</button>        
      </div>     
    )
  }
}

export default App;
