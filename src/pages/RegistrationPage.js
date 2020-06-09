import React, { useEffect, useState } from "react";
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
  const [validCode, setValidCode] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (inviteCode === "validCode") {
        setValidCode(true);
      } else {
        setValidCode(false);
        addToast("Invalid invite code", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    }, 5000);
  }, []);

  if(registrationStore.registrationSuccessful){
    return <Redirect to="/login" />
  }

  if (!validCode) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <HomeNav />
      <RegistrationForm />
    </Layout>
  );
};

export default observer(RegistrationPage);
