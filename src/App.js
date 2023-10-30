import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegistrationForm from './RegistrationForm';

import './styles.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="app">
      {showLogin ? (
        <>
          <LoginForm />
          <div className="button-container">
            <button onClick={() => setShowLogin(false)}>Register</button>
          </div>
        </>
      ) : (
        <>
          <RegistrationForm />
          <div className="button-container">
            <button onClick={() => setShowLogin(true)}>Login</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;