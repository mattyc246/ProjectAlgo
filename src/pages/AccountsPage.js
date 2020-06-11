import React from "react";
import styled from "styled-components";
import DashboardLayout from "../containers/DashboardLayout";
import NewAccountForm from "../forms/NewAccountForm";
import { observer } from "mobx-react";
import useStores from "../hooks/useStores";

const AccountsContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

const NoAccounts = styled.div`
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AccountsPage = () => {
  const { accountStore } = useStores();
  return (
    <DashboardLayout page="accounts">
      <div className="row">
        <div className="col-7">
          <AccountsContainer>
            <h5>Manage your accounts:</h5>
            {
              accountStore.accounts.length === 0 ? (
                <NoAccounts>
                  <h3>You don't have any accounts yet.</h3>
                  <h5>Add a new account.</h5>
                </NoAccounts>
              ) : (
                accountStore.accounts.map((acc, idx) => {
                  return(
                    <h5></h5>
                  )
                })
              )
            }
          </AccountsContainer>
        </div>
        <div className="col-5">
          <AccountsContainer>
            <h6>Add new account:</h6>
            <NewAccountForm />
          </AccountsContainer>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default observer(AccountsPage);
