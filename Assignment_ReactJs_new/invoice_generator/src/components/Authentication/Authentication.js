
import React, { useState } from 'react';

const Authentication = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleToggleAuthMode = () => {
    setIsLogin((prevMode) => !prevMode);
  };

  const handleAuthentication = () => {
    if (isLogin) {
      //  login logic using local storage
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.mobileNumber === mobileNumber && storedUser.password === password) {
        onLogin(storedUser);
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } else {
      //  registration logic using local storage
      const newUser = {
        fullName,
        email,
        location,
        mobileNumber,
        password,
      };
      localStorage.setItem('user', JSON.stringify(newUser));
      onLogin(newUser);
    }
  };

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      {!isLogin && (
        <div>
          <label>Full Name:</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>
      )}
      {!isLogin && (
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      )}
      {!isLogin && (
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
      )}
      <div>
        <label>Mobile Number:</label>
        <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleAuthentication}>{isLogin ? 'Login' : 'Register'}</button>
      <p onClick={handleToggleAuthMode} style={{ cursor: 'pointer', color: 'blue' }}>
        {isLogin ? 'New user? Register here.' : 'Already registered? Login here.'}
      </p>
    </div>
  );
};

export default Authentication;
