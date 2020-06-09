import React from "react";
import { useToasts } from "react-toast-notifications";
import { observer } from "mobx-react";
import styled from "styled-components";
import FancyButton from "./FancyButton";
import LoadingForm from "./LoadingForm";
import useStores from "../hooks/useStores";

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

const FancyList = styled.ul`
  padding: 0;

  li {
    list-style: none;
    color: #ef0e0e;
    margin: 3px 0;
  }
`;

const RegistrationForm = ({inviteCode}) => {
  const { addToast } = useToasts();
  const { registrationStore } = useStores();
  const {
    name,
    email,
    password,
    passwordConfirm,
  } = registrationStore.registration;

  return (
    <LoadingForm loading={registrationStore.submitting} message={registrationStore.message}>
      <h4>Registration</h4>
      <form onSubmit={(e) => registrationStore.handleSubmit(e, inviteCode, addToast)}>
        <FancyFormGroup>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Full Name"
            onChange={(e) => registrationStore.handleRegistration(e)}
          />
        </FancyFormGroup>
        <FancyFormGroup>
          <label htmlFor="name">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Valid Email"
            onChange={(e) => registrationStore.handleRegistration(e)}
          />
        </FancyFormGroup>
        <FancyFormGroup>
          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => registrationStore.handleRegistration(e)}
          />
          <small>Required min. 8 characters.</small>
        </FancyFormGroup>
        <FancyFormGroup>
          <label htmlFor="name">Password Confirmation</label>
          <input
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            placeholder="Password"
            onChange={(e) => registrationStore.handleRegistration(e)}
          />
        </FancyFormGroup>
        <FancyFormGroup>
          {registrationStore.errors.length > 0 ? (
            <FancyList>
              {registrationStore.errors.map((error, idx) => {
                return (
                  <li key={idx}>
                    <small>{error}</small>
                  </li>
                );
              })}
            </FancyList>
          ) : (
            ""
          )}
        </FancyFormGroup>
        <FancyButton center>Submit</FancyButton>
      </form>
    </LoadingForm>
  );
};

export default observer(RegistrationForm);
