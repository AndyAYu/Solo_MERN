import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';  

export default function Logout() {
    
function handleSubmit(event) {
     event.preventDefault();
     debugger
     axios
          .get('http://localhost:8081/logout')
          .then(res => {
                console.log("Logout Successful!");
                localStorage.removeItem('token');
                window.location.href = '/';
          }
          )
          .catch(err => {
                console.log("Error in Logout!");
          }
          )
      }
    
      return (
     <div className="Logout">
          <div className="container">
                 <Button className="btn-warning"onClick={handleSubmit}>Logout</Button>
          </div>
     </div>
      );
}