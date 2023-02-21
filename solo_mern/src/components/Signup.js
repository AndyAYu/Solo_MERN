//Sign up component
import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const data = {
            Email: this.state.email,
            Password: this.state.password
        };
        axios
            .post('http://localhost:3000/api', data)
            .then(res => {
                this.setState({
                    email: '',
                    password: ''
                })
                this.props.history.push('/signup')
            })
            .catch(err => {
                console.log("Error in Signup!");
            })
    }

    render() {
        return (
            <div className="Signup">
                <div className="container">
                    <div className="align-middle">
                        <Link to="/" className="btn btn-outline-warning float-left">
                                Home Page
                        </Link>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group size="lg" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                autoFocus
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChange}
                                />

                            </Form.Group>
                            <Form.Group size="lg" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                                />

                            </Form.Group>
                            <Button block="true" size="lg" type="submit">
                            Sign Up
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;