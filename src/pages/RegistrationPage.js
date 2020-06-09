import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useToasts } from "react-toast-notifications";
import { useParams, Redirect } from "react-router-dom";
import useStores from "../hooks/useStores"
import Layout from "../components/Layout";
import HomeNav from "../components/HomeNav";
import RegistrationForm from "../components/RegistrationForm";

const RegistrationPage = (props) => {
  const { inviteCode } = useParams();
  const { addToast } = useToasts();
  const { registrationStore } = useStores();

  useEffect(() => {
    registrationStore.validateInviteCode(inviteCode)
  }, []);

  if(registrationStore.registrationSuccessful){
    return <Redirect to="/login" />
  }

  if (!registrationStore.validInvite) {
    addToast('Invalid invite code', {appearance: 'error', autoDismiss: true})
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <HomeNav />
      <RegistrationForm inviteCode={inviteCode} />
    </Layout>
  );
};

export default observer(RegistrationPage);
