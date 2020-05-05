import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

//Login component
export default function Login(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const validateForm = () => {
        return userName.length > 0 && password.length > 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onLogin({ userName, password });
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormGroup controlId="userName" bsSize="large">
                <FormLabel>User Name</FormLabel>
                <FormControl
                    autoFocus
                    type="text"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
                <FormLabel>Password</FormLabel>
                <FormControl
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                />
            </FormGroup>
            <Button block bsSize="large" disabled={!validateForm()} type="submit">Login</Button>
        </form>
    );
}