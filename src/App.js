import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistrationPage from "./pages/RegistrationPage"
import LoginPage from "./pages/LoginPage"

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={(props) => <HomePage {...props} />} />
      <Route path="/invite/:inviteCode" component={(props) => <RegistrationPage {...props} />} />
      <Route path="/login" component={(props) => <LoginPage {...props} />} />
    </Switch>
  );
}

export default App;
