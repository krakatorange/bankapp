import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function RegisterButton({name, email, pass, pass2}) {

    const payload = {
        name: name,
        email: email,
        password: pass,
        password2: pass2
    }

    async function register() {

        axios.post('http://localhost:5000/api/users/register', payload)
        .then(response => {
            
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        });
    }
    
    return (
        <Button onClick={register} color="primary">
            Register
        </Button>
    );
}

export default RegisterButton;