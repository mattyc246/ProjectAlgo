import React from "react";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import useStores from "../hooks/useStores";
import Layout from "../components/Layout";
import HomeNav from "../components/HomeNav";
import LoginForm from "../forms/LoginForm";

const LoginPage = () => {
  const { userStore } = useStores();

  if (userStore.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Layout>
      <HomeNav />
      <LoginForm />
    </Layout>
  );
};

export default observer(LoginPage);
