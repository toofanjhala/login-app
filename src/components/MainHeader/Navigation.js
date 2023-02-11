import React,{useContext} from 'react';
import Authcontext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = (props) => {

const data = useContext(Authcontext)
  return (
    <nav className={classes.nav}>
      <ul>
        {data.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {data.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {data.isLoggedIn && (
          <li>
            <button onClick={data.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
