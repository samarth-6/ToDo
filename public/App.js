import React, { useState } from 'react';
import Header from './Header';
import Todocontainer from './todocontainer';
import Login from './Login';
import './styles.css';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <div className="headme">
        <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      </div>
      {isLoggedIn &&(
      <div className="todo-container">
        <Todocontainer/>
      </div>)}
      {!isLoggedIn && (
      <div className="login-butto">
      <Login onLogin={handleLogin}/>
      </div>
      )}
    </div>
  );
};

export default App;
