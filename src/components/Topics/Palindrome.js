import React, { Component } from 'react';


export default class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    updateUserInput(val) {
        this.setState({ userInput: val });
    }
    isPalindrome(userInput) {
        var forwards = userInput;
        var backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if (forwards === backwards) {
            this.setState({ palindrome: '"TRUUUUU" - 2Chainz' });
        } else {
            this.setState({ palindrome: 'false' });
        }
    }

    render() {
        return (
            <div className="puzzleBox palindromePB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={(e) => this.updateUserInput(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.isPalindrome(this.state.userInput)}> Check </button>
                <span className="resultsBox"> Palindrome: {this.state.palindrome} </span>
            </div>
        )
    }
}