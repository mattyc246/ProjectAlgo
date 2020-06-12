import React from "react";
import { observer } from "mobx-react";
import useStores from "../hooks/useStores";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {
    rootStore: { userStore },
  } = useStores();
  return (
    <Route
      {...rest}
      render={(props) =>
        userStore.loggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default observer(PrivateRoute);
