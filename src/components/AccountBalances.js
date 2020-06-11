import React from "react";
import { observer } from "mobx-react";
import MARKETS from "../constants/markets";
import styled from "styled-components";
import useStores from "../hooks/useStores";

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

  .feint {
    font-weight: 400;
  }

  .right {
    text-align: right;
  }
`;

const AccountBalances = () => {
  const { accountStore } = useStores();

  return (
    <Container>
      <h4>
        <u>Account Overview</u>
      </h4>
      <hr />
      <div className="row">
        <div className="col-8">
          <h6>Combined Balance:</h6>
        </div>
        <div className="col-4">
          <h6 className="feint right">USD 1,432.11</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <h6>No. Of Accounts:</h6>
        </div>
        <div className="col-4">
          <h6 className="feint right">{accountStore.accounts.length}</h6>
        </div>
      </div>
      <hr />
      <h5>
        <u>Account Balances</u>
      </h5>
      {accountStore.accounts.map((acc) => {
        return (
          <div key={acc.id} className="row">
            <div className="col-8">
              <h6 className="mb-0">{acc.name}</h6>
              <img
                src={MARKETS[acc.platform].logo}
                alt={MARKETS[acc.platform].displayName}
                width="70px"
              />
            </div>
            <div className="col-4">
              <h6 className="feint right">USD 123.23</h6>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default observer(AccountBalances);
