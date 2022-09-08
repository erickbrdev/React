import React from 'react';
import './App.css';




class App extends React.Component {
  
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }
   handleClick () {
    console.log(this)
    console.log('Teste')
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>        
      </div>     
    )
  }
}

export default App;
