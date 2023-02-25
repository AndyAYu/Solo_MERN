import React, { useState } from 'react';

function Session() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // perform login logic here
    setIsLoggedIn(true);
    setUsername('exampleUser'); // set username based on logged in user
  };

  const handleLogout = () => {
    // perform logout logic here
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" onChange={(event) => setUsername(event.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Session;