import React from "react";
import styled from "styled-components";
import DashboardLayout from "../containers/DashboardLayout";
import NewAccountForm from "../forms/NewAccountForm";
import Loader from "../assets/images/loader.svg";
import { observer } from "mobx-react";
import useStores from "../hooks/useStores";
import moment from "moment";
import { useEffect } from "react";
import { useToasts } from "react-toast-notifications";

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
`;

const Account = styled.div`
  width: 100%;
  padding: 1rem 0;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  h5 {
    margin: 0.5rem 0;
  }

  small {
    display: block;
    margin: 0.5rem 0;
  }

  button {
    display: block;
    background-color: #ef0e0e;
    border: 0;
    color: white;
    width: 80px;
    padding: 0.5rem;
    font-weight: 500;
    text-decoration: none;
    font-size: smaller;
    outline: none;
    margin: 1rem ${(props) => (props.center ? "auto" : 0)};
    cursor: pointer;
  }
`;

const AccountsPage = () => {
  const { accountStore } = useStores();
  const { addToast } = useToasts();

  useEffect(() => {
    accountStore.fetchAccounts();
  }, []);

  return (
    <DashboardLayout page="accounts">
      <div className="row">
        <div className="col-7">
          <AccountsContainer>
            <h5>Manage your accounts:</h5>
            {accountStore.accounts.length === 0 ? (
              <NoAccounts>
                {accountStore.fetching ? (
                  <img src={Loader} alt="loader" width="80px" />
                ) : (
                  <>
                    <h3>You don't have any accounts yet.</h3>
                    <h5>Add a new account.</h5>
                  </>
                )}
              </NoAccounts>
            ) : (
              accountStore.accounts.map((acc, idx) => {
                return (
                  <Account key={idx}>
                    <div>
                      <h5>{acc.name}</h5>
                      <small>
                        Created On:{" "}
                        {moment(acc.inserted_at).format("Do MMMM YYYY")}
                      </small>
                      <small>Platform: {acc.platform}</small>
                    </div>
                    <button
                      onClick={() =>
                        accountStore.deleteAccount(acc.id, addToast)
                      }
                    >
                      Delete
                    </button>
                  </Account>
                );
              })
            )}
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
