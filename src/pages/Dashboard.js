import React from 'react'
import DashboardLayout from '../containers/DashboardLayout'
import UserInvite from "../components/UserInvite"

const Dashboard = () => {
  return (
    <DashboardLayout page="dashboard">
      <UserInvite />
    </DashboardLayout>
  )
}

export default Dashboard
