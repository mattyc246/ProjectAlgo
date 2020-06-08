import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={(props) => <HomePage {...props} />} />
    </Switch>
  );
}

export default App;
