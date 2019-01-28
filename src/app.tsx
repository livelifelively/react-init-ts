import * as React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store/index';

import Navigation from './components/navigation/navigation';
import {
  SIGN_UP,
  SIGN_IN,
  LANDING,
  PASSWORD_FORGET,
  PROFILE,
  HOME
} from './components/navigation/routes';
import {
  SignUpPage,
  SignInPage,
  HomePage,
  LandingPage,
  PasswordForgetPage,
  ProfilePage
} from './containers';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navigation />
            <Route exact path={LANDING} component={LandingPage} />
            <Route exact path={HOME} component={HomePage} />
            <Route exact path={SIGN_UP} component={SignUpPage} />
            <Route exact path={SIGN_IN} component={SignInPage} />
            <Route exact path={PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route exact path={PROFILE} component={ProfilePage} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
