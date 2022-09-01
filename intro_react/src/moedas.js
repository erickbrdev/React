import React from "react";

class Moedas extends React.Component {
  
    render() {
      const moedas = [
        { 
          brasil: 'Real',
          canadá: 'dolár',
          alemanha:'euro',
        }
      ];
      return (
        moedas.map((moeda) => moeda.brasil)
      )
    }
  }

  export default Moedas