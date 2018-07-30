import React, { Component } from 'react';

import {
        Link
      } from 'react-router-dom'

class SearchResult extends Component {
        constructor(props) {
                super(props);
            
                this.state = {
                  props: this.props.location.state.passedVal
                }
              }
              
        render() {
                console.log("Inne i search result")
                console.log(this.state.props);
                return (
                <div>
                <h1>Detta är data för sökta address: </h1>
                <p>{"Takyta: " + this.state.props.takyta + " m2"}</p>
                <p>{"Takyta_1000: " + this.state.props.tak_1000 + " m2"}</p>
                <p>{"Takyta_950_10: " + this.state.props.tak_950_10 + " m2"}</p>
                <p>{"Sol_1000: " + this.state.props.sol_1000 + " kWh"}</p>
                <p>{"Sol_950_10: " + this.state.props.sol_950_10 + " kWh"}</p>
                <p>{"Storlek på system: " + this.state.props.sys_size + " kWh"}</p>
                <p>{"Antal moduler: " + this.state.props.nbr_of_modules + " st"}</p>
                <p>{"Pris: " + this.state.props.tot_price + " kr"}</p>
                <p>{"Bidrag: " + this.state.props.subsidy + " kr"}</p>
                <p>{"Intjänade pengar: " + this.state.props.tot_earnings + " kr"}</p>
                <p>{"Miljövinst: " + this.state.props.env_win + " :e dag"}</p>
                <p>{"Vinst i pengar: " + this.state.props.profit + " kr"}</p>
                <Link to="/home">Sök igen</Link>
                </div>
                );
        }
}


export default SearchResult