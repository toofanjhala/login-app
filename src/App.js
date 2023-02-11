import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Authcontext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const lateststatus=localStorage.getItem("status")
    if(lateststatus==="true"){
      setIsLoggedIn(true)
    }
  },[])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    
    localStorage.setItem('status','true');
    setIsLoggedIn(true);

  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('status');
  };

  return (
    <Authcontext.Provider 
    value={ {
    isLoggedIn:isLoggedIn ,
    onLogout:logoutHandler
    }
 }>
      <MainHeader  />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </Authcontext.Provider>
  )
}

export default App;
