import React from "react";
import { observer } from "mobx-react";
import useStores from "../hooks/useStores";
import styled from "styled-components";
import PLATFORMS from "../constants/platforms";
import FancyButton from "../components/FancyButton";
import { useToasts } from "react-toast-notifications";

const FancyFormGroup = styled.div`
  width: 100%;

  label {
    font-size: 14px;
    display: block;
    font-weight: 500;
  }

  input,
  select {
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

  select {
    height: 35px;
  }
`;

const StyledSmall = styled.small`
  font-size: 12px;
  font-weight: 500;
`;

const NewAccountForm = () => {
  const {
    rootStore: { accountStore },
  } = useStores();
  const { addToast } = useToasts();
  const { name, api_key, api_secret, platform } = accountStore.newAccount;

  return (
    <form onSubmit={(e) => accountStore.addAccount(e, addToast)}>
      <FancyFormGroup>
        <label htmlFor="name">Account Name</label>
        <input
          type="text"
          name="name"
          placeholder="Account Name"
          value={name}
          onChange={(e) => accountStore.handleChange(e)}
        />
      </FancyFormGroup>
      <FancyFormGroup>
        <label htmlFor="name">API Key</label>
        <input
          type="text"
          name="api_key"
          placeholder="API Key"
          value={api_key}
          onChange={(e) => accountStore.handleChange(e)}
        />
      </FancyFormGroup>
      <FancyFormGroup>
        <label htmlFor="name">API Secret</label>
        <input
          type="text"
          name="api_secret"
          placeholder="API Secret"
          value={api_secret}
          onChange={(e) => accountStore.handleChange(e)}
        />
      </FancyFormGroup>
      <FancyFormGroup>
        <label htmlFor="name">Platform</label>
        <select
          name="platform"
          value={platform}
          onChange={(e) => accountStore.handleChange(e)}
        >
          <option selected value="" disabled>
            Choose Platform
          </option>
          {PLATFORMS.map((platform, idx) => {
            return (
              <option key={idx} value={platform.value}>
                {platform.name}
              </option>
            );
          })}
        </select>
      </FancyFormGroup>
      <StyledSmall>
        Your details will be securely stored and encrypted.
      </StyledSmall>
      <FancyButton loading={accountStore.submitting} size="block">
        Add Account
      </FancyButton>
    </form>
  );
};

export default observer(NewAccountForm);
