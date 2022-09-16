import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HeroTitle from './Components/title';
import HomePage from './Components/homepage';
import About from './Components/about';
import './App.css';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>        
        <h1>React is wonderful</h1>
        <Route exact path="/" component={HeroTitle} />
        <Route path="/home/" render={ () => <HomePage title="Programmer on the way" />} />
        <Route path="/about" component={About} />       
      </BrowserRouter>
    )
  }
  
}

export default App;
