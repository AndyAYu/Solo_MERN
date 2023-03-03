import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/register.css';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  function validateForm() {
    return formData.email.length > 0 && formData.password.length > 0;
  }

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8081/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        window.location.href = '/';
      } else {
        response.json().then(data => setErrorMessage(data.message));
      }
    })
    .catch(error => console.error(error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div className="RegisterPage">
      <img id="RegisterHero"src="https://img.freepik.com/free-vector/bee-honey-icons-stickers-set-with-spoon-jar-bumblebee-isolated-vector-illustration_1284-2958.jpg?w=740&t=st=1677824566~exp=1677825166~hmac=37e3ed34b3662282893404074c2ef0c3d3dc808d89a6d27944a8f4d224021e87" alt="bee icons">
      </img>
      <form onSubmit={handleSubmit}>
        <Link to="/" className="btn btn-outline-warning">The Hive</Link>
        <h2>Sign up</h2>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button className="btn-warning"type="submit" disabled={!validateForm()}>Sign up</button>
      </form>
    </div>
  );
}

export default Register;