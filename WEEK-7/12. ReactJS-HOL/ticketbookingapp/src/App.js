
import React, { Component } from 'react';
import './App.css';


import { UserGreeting, GuestGreeting, LoginButton, LogoutButton } from './GreetingComponents';


function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { isLoggedIn: false };

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {

        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {

        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div className="App">
                {}
                <Greeting isLoggedIn={isLoggedIn} />
                {}
                {button}
            </div>
        );
    }
}

export default App;