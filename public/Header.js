// Header.js
import React from 'react';

const Header = ({ isLoggedIn,onLogin,onLogout }) => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h1 style={{ margin: 'auto' }}>ToDo List</h1>
      {isLoggedIn ? (
        <button onClick={onLogout} style={{ padding: '8px 16px', backgroundColor: 'white', color: 'black', fontSize: '16px', borderRadius: '5px' }}>
          Logout
        </button>
      ) : (
        <button onClick={onLogin} style={{ padding: '8px 16px', backgroundColor: 'white', color: 'black', fontSize: '16px', borderRadius: '5px' }}>
          Login
        </button>
      )}
    </header>
  );
};

export default Header;
