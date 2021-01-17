import React, { useState as UseState, useEffect as UseEffect } from 'react';
import { useHistory as UseHistory, useLocation as UseLocation } from "react-router-dom";
import auth from '../auth';

const Login = () => {

    const [loggedIn, setLoggedIn] = UseState(false);
    let history = UseHistory();

    UseEffect(() => {
        login();
    }, [])

    const authenticate = () => {
        auth.login()
        login();
        gotToList();
        console.log(history);
    }

    const login = () => {
        let token = localStorage.getItem('token');
        setLoggedIn(JSON.parse(token));
    }

    const logout = () => {
        localStorage.removeItem('token');
        gotToList();
    }
    
    const gotToList = () => {
        history.push('/learners-list');
        setLoggedIn(false);
    }

    return (
        <div>
            {
                !loggedIn ? <button onClick={authenticate}> Login </button> : <button onClick={logout}> Log out </button>
            }
        </div>
    )
}


export default Login;










