import React from 'react';
import './App.css';




class App extends React.Component {
   handleClick () {
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
