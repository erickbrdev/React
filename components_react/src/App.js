import './App.css';
import React from 'react';
import InfoPerson from './componentes/components';

class App extends React.Component {
  render() {  
    return (
      <section>
        <InfoPerson name = 'Kcire' age = { 162 } />
      </section>
    )
  }
}

export default App;
