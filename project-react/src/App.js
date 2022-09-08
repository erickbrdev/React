import React from 'react';
import './App.css';
import Country from './data';
class App extends React.Component {
  
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this) 
    
    this.state = {
      name: ''
    };
  }
   handleChange(e) {
    this.setState({ name: e.target.value })
  };  
  render() {    
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <ul>
          { 
            Country
            .filter((item) => item.name.includes(this.state.name))
            .map((elem, index) => <li key={index}>{elem.name}</li>)
          }
        </ul>                  
      </div>     
    )
  }
}

export default App;
