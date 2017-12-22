import React, { Component } from 'react';


export default class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            x: 0,
            y: 0,
            sum:null
        }
    }
    updateX(val) {
        this.setState({x: Number(val)});
    }
    updateY(val) {
        this.setState({y: Number(val)});
    }
    add(x,y) {
        this.setState({sum: x+y})
    }



    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Sum</h4>
                <input className="inputLine" type="number" onChange={(e) => this.updateX(e.target.value)}></input>
                <input className="inputLine" type="number" onChange={(e) => this.updateY(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => { this.add(this.state.x,this.state.y) }}>Add it up!</button>
                <span className="resultsBox">Sum = {this.state.sum} </span>
              
            </div>
        )
    }
}