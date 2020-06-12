import React from "react";
import DashboardLayout from "../containers/DashboardLayout";
import UserInvite from "../components/UserInvite";
import AccountBalances from "../components/AccountBalances";
import AccountBreakdown from "../components/AccountBreakdown";
import useStores from "../hooks/useStores";
import { useEffect } from "react";

const Dashboard = () => {
  const {
    rootStore: { accountStore },
  } = useStores();

  useEffect(() => {
    accountStore.fetchAccounts();
  }, []);

  return (
    <DashboardLayout page="dashboard">
      <UserInvite />
      <div className="row my-4">
        <div className="col-6">
          <AccountBalances />
        </div>
        <div className="col-6">
          <AccountBreakdown />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
