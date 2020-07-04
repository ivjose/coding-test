import React, { useState } from 'react';
import Button from 'components/Button';
import ErrorDisplay from 'components/ErrorDisplay';
import { setToken } from 'utils/auth';

import { login } from './helper';

import './Login.styles.css';

const warningIcon = `${process.env.PUBLIC_URL}/img/svg/warning-icon.svg`;
const emailIcon = `${process.env.PUBLIC_URL}/img/svg/email-icon.svg`;

const Login = ({ setIsLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (password.toLocaleLowerCase() !== 'meld123') {
    //   return setError('Sorry your password is incorrect');
    // }

    try {
      const response = await login({ email, password });

      setToken(response);
      setIsLogin(true);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        {error && <ErrorDisplay message={error} />}
        <form onSubmit={handleSubmit}>
          <div className="field-wrap">
            <img className="field-icon" src={emailIcon} alt="email" />
            <input
              required
              className="field-input"
              type="text"
              name="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setError('');
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="field-wrap">
            <img className="field-icon" src={warningIcon} alt="warning icon" />
            <input
              required
              className="field-input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setError('');
                setPassword(e.target.value);
              }}
            />
          </div>
          <Button text="LOG IN" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
