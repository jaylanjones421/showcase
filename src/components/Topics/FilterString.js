import React, { Component } from 'react';


export default class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: ['lol','haha','lmao','smh','skrrt'],
            userInput: '',
            filteredArray: []
        }
    }
    updateUserInput(val) {
        this.setState({userInput: val});
    }
    filterStr(userInput) {
        var str = this.state.unFilteredArray;
        var filteredArray = [];
    
        for ( var i = 0; i < str.length; i++ ) {
          if ( str[i].includes(userInput) ) {
            filteredArray.push(str[i]);
          }
        }
    
        this.setState({ filteredArray: filteredArray});
      }


    render() {
        return (
          <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText"> Strings: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
            <input className="inputLine" onChange={(e)=>this.updateUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={()=>this.filterStr(this.state.userInput)}> Filter </button>
            <span className="resultsBox filterStringRB">Filtered Strings: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
          </div>
        )
      }
}