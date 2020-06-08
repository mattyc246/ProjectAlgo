import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import HomeNav from "../components/HomeNav";
import RegistrationForm from "../components/RegistrationForm";

const RegistrationPage = (props) => {
  const { inviteCode } = useParams();
  const { addToast } = useToasts();
  const [validCode, setValidCode] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (inviteCode === "validCode") {
        setValidCode(true);
      } else {
        setValidCode(false);
        addToast("Invalid invite code", { appearance: "error", autoDismiss: true });
      }
    }, 5000);
  }, []);

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

export default RegistrationPage;
