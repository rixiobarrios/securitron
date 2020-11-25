import React from "react";
import Button from '@material-ui/core/Button';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton= () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
        <Button color="inherit" onClick={() => loginWithRedirect() }>
            Log In
        </Button>
        )
    )
}

export default LoginButton;