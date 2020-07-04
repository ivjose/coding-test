import React, { useEffect, useState } from 'react';
import Devices from 'pages/Devices';
import Login from 'pages/Login';

import { isLoggedIn } from 'utils/auth';

import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(isLoggedIn());
  }, []);

  return (
    <section className="main-wrap">
      {isLogin ? (
        <Devices setIsLogin={setIsLogin} />
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}
    </section>
  );
}

export default App;
