import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../style/login.css";

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
            const token = res.data.token;
            localStorage.setItem('token', token);
            setEmail('');
            setPassword('');
            window.location.href = '/';
        }
        )
        .catch(err => {
            console.log("Error in Login!");
        }
        )
  }

  return (

    <div className="Loginpage container-">
        
        <div className="Loginhero">
            <img id="Loginimage"alt="giraffe"src="https://i0.wp.com/www.faunafondness.com/wp-content/uploads/2020/11/a-8.jpeg"></img>
        </div>
        <div className="Login">
            <div className="LoginRight">
                <Link to="/" className="btn btn-outline-warning ">
                    The Hive
                </Link>
                <Form id="Loginform" onSubmit={handleSubmit}>
                    <Form.Group className="pt-3" size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />

                    </Form.Group>
                    <Form.Group className="pt-3 pb-3" size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />

                    </Form.Group>
                    <Button className="btn-warning" block="true" type="submit" disabled={!validateForm()}>
                    Login
                    </Button>
                    <div>
                    <a>Don't have an account yet?</a>
                    <Link to="/register" className="btn btn-warning ">Sign Up</Link>
                    </div>
                </Form>
            </div>
    </div>
    </div>
  );

}