import React from "react";
import styled from "styled-components";
import DownArrow from "../assets/icons/down-arrow.png";
import { observer } from "mobx-react";
import useStores from "../hooks/useStores";

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

  .center {
    text-align: center;
  }
`;

const BreakdownFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .box {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    width: 10vw;
    height: 10vw;
    padding: 0.5rem;
    margin-bottom: 1rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  }
`;

const TitleSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccountSelect = styled.select`
  appearance: none;
  width: 100%;
  background-color: white;
  background-position: right;
  background-repeat: no-repeat;
  background-size: 15px;
  background-image: url(${DownArrow});
  border: 0;
  border-radius: 0px;
  border-bottom: 1px solid black;
  margin: 1rem;
  outline: none;
  padding: 0.5rem;
  font-weight: 500;
  text-transform: uppercase;
`;

const AccountBreakdown = () => {
  const { accountStore } = useStores();

  return (
    <Container>
      <TitleSelect>
        <h3>Account:</h3>
        <AccountSelect
          defaultValue=""
          onChange={(e) => accountStore.selectFocusAccount(e.target.value)}
        >
          <option value=""></option>
          {accountStore.accounts.map((acc) => {
            return (
              <option key={acc.id} value={acc.id}>
                {acc.name}
              </option>
            );
          })}
        </AccountSelect>
      </TitleSelect>
      {accountStore.focusedAccount ? (
        <BreakdownFlex>
          <div className="box">Test</div>
          <div className="box">Test</div>
          <div className="box">Test</div>
          <div className="box">Test</div>
          <div className="box">Test</div>
          <div className="box">Test</div>
        </BreakdownFlex>
      ) : (
        <h6 className="center">
          Pick an account to see a more detailed breakdown
        </h6>
      )}
    </Container>
  );
};

export default observer(AccountBreakdown);
