import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Link, Router } from 'react-router-dom';

function LoginButton({email, pass}) {

    const payload = {
        email: email,
        password: pass
    }

    async function login() {

        axios.post('http://localhost:5000/api/users/login', payload)
        .then(response => {
            console.log(response)
            // Success
        })
        .catch(error => {
            console.log(error.response)
            // Error
        });
    }

    return (
        <Button onClick={login} color="primary">
            <Link to="/User">Login</Link>
        </Button>
    );
}

export default LoginButton;