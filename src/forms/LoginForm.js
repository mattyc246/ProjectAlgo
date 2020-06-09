import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { useToasts } from "react-toast-notifications";
import useStores from "../hooks/useStores";
import LoadingForm from "./LoadingForm";
import FancyButton from "../components/FancyButton";

const FancyFormGroup = styled.div`
  width: 70%;
  margin: 1rem auto;

  label {
    display: block;
    font-weight: 500;
  }

  input {
    display: block;
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.6rem;
    border-radius: 5px;
    border: 1px solid #707070;
    outline: none;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);

    :focus {
      border: 2px solid #41487b;
      padding: calc(0.6rem - 1px);
      transition: 0.5s ease-in-out;
    }
  }
`;

const LoginForm = () => {
  const { userStore } = useStores();
  const { addToast } = useToasts();
  const { email, password } = userStore.login;

  return (
    <LoadingForm loading={userStore.loggingIn} message="Logging in">
      <h4>Login</h4>
      <form onSubmit={(e) => userStore.handleLogin(e, addToast)}>
        <FancyFormGroup>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => userStore.handleChange(e)}
          />
        </FancyFormGroup>
        <FancyFormGroup>
          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => userStore.handleChange(e)}
          />
        </FancyFormGroup>
        <FancyButton center>Submit</FancyButton>
      </form>
    </LoadingForm>
  );
};

export default observer(LoginForm);
