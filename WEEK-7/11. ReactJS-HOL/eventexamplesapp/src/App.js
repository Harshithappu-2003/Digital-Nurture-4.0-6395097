
import React, { Component } from 'react';
import './App.css';

import CurrencyConverter from './CurrencyConverter';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };

        this.incrementValue = this.incrementValue.bind(this);
        this.decrementValue = this.decrementValue.bind(this);
        this.sayHello = this.sayHello.bind(this);
        this.sayWelcome = this.sayWelcome.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    incrementValue() {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
        this.sayHello();
    }


    sayHello() {
        alert("Hello: Member1");
    }


    decrementValue() {
        this.setState(prevState => ({
            counter: prevState.counter - 1
        }));
    }

    sayWelcome(message) {
        alert(message);
    }


    handleClick() {
        alert("I was clicked");
    }

    render() {
        return (
            <div className="App">
                {}
                <h1>{this.state.counter}</h1>

                {}
                <button onClick={this.incrementValue}>Increment</button>
                <br />

                {}
                <button onClick={this.decrementValue}>Decrement</button>
                <br />

                {}
                {}
                <button onClick={() => this.sayWelcome("welcome")}>Say welcome</button>
                <br />

                {}
                <button onClick={this.handleClick}>Click on me</button>

                <hr />

                {}
                <CurrencyConverter />
            </div>
        );
    }
}

export default App;