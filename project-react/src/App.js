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
    // const btn = document.querySelector('.btn')

    this.setState((previousState, _props) => ({
      click: previousState.click +1
    }));

    if(this.state.click % 2 !== 0) {    
      console.log('Verde')
    }
  };
  
  render() {
    const { click } = this.state
    return (
      <div>
        <button id='btn' onClick={this.handleClick}>{click}</button>        
      </div>     
    )
  }
}

export default App;
