import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistrationPage from "./pages/RegistrationPage"
import LoginPage from "./pages/LoginPage"
import PaymentPage from './pages/PaymentPage';
import PrivateRoute from './components/PrivateRoute';
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
import Dashboard from './pages/Dashboard';
import AccountsPage from './pages/AccountsPage'

const stripePromise = loadStripe("pk_test_TcVbeXC9ubClxRdZU0XpoM3900YfLrn9Af");

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <Switch>
        <Route exact path="/" component={(props) => <HomePage {...props} />} />
        <Route path="/invite/:inviteCode" component={(props) => <RegistrationPage {...props} />} />
        <Route path="/login" component={(props) => <LoginPage {...props} />} />
        <PrivateRoute path="/membership/checkout" component={(props) => <PaymentPage {...props} />} />
        <PrivateRoute path="/dashboard" component={(props) => <Dashboard {...props} />} />
        <PrivateRoute path="/dashboard/accounts" component={(props) => <AccountsPage {...props} />} />
      </Switch>
    </Elements>
  );
}

export default App;
