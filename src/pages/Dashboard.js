import React from 'react'
import DashboardLayout from '../containers/DashboardLayout'
import UserInvite from "../components/UserInvite"
import AccountBalances from '../components/AccountBalances'

const Dashboard = () => {
  return (
    <DashboardLayout page="dashboard">
      <UserInvite />
      <div className="row my-4">
        <div className="col-6">
          <AccountBalances />
        </div>
        <div className="col-6"></div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard
