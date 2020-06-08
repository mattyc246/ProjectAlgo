import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistrationPage from "./pages/RegistrationPage"

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={(props) => <HomePage {...props} />} />
      <Route path="/register/:inviteCode" component={(props) => <RegistrationPage {...props} />} />
    </Switch>
  );
}

export default App;
