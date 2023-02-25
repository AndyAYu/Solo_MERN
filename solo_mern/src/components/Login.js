import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
        .post('http://localhost:8081/login', { email, password })
        .then(res => {
            console.log("Login Successful!");
            setEmail('');
            setPassword('');
        }
        )
        .catch(err => {
            console.log("Error in Login!");
        }
        )
        window.location.href = '/';
  }

  return (
    <div className="Login">
        <div className="container">
            <div className="align-middle">
                <Link to="/" className="btn btn-outline-warning float-left">
                        Home Page
                </Link>
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />

                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />

                    </Form.Group>
                    <Button className="btn-success" block="true" size="lg" type="submit" disabled={!validateForm()}>
                    Login
                    </Button>
                </Form>
            </div>
        </div>

    </div>
  );

}