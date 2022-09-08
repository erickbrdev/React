import React from 'react';
import './App.css';

function handleClick () {
  console.log('Teste')
}

let number = 0
function sum () { 

    for (let index = 0;  index < 50; index += 1)
    number += index
    console.log(number)
}


class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={handleClick}>Click</button>
        <button onClick={sum}>Sum</button>
      </div>     
    )
  }
}

export default App;
