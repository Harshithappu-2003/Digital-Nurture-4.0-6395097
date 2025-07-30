
import React from 'react';


function UserGreeting() {
    return <h1>Welcome back!</h1>;
}


function GuestGreeting() {
    return <h1>Please sign up.</h1>;
}


function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}


function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

export { UserGreeting, GuestGreeting, LoginButton, LogoutButton };