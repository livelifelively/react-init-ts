import * as React from 'react';
import { SFC } from 'react';
import { Link } from 'react-router-dom';

import {
  SIGN_UP,
  SIGN_IN,
  LANDING,
  PASSWORD_FORGET,
  PROFILE,
  HOME
} from './routes';

interface INavigationProps {

}

const Navigation: SFC<INavigationProps> = (props) => {
  return (
    <div>
      <ul>
        <li><Link to={LANDING}>Landing</Link></li>
        <li><Link to={HOME}>Home</Link></li>
        <li><Link to={SIGN_IN}>Sign In</Link></li>
        <li><Link to={SIGN_UP}>Sign Up</Link></li>
        <li><Link to={PROFILE}>Profile</Link></li>
        <li><Link to={PASSWORD_FORGET}>Forgot Password</Link></li>
      </ul>
    </div>
  );
};

export default Navigation;
