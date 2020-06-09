import React, { useState } from "react";
import { observer } from "mobx-react";
import useStores from "../hooks/useStores";
import styled from "styled-components";
import Layout from "../components/Layout";
import HomeNav from "../components/HomeNav";
import PaymentSummary from "../components/PaymentSummary"
import AddressForm from "../forms/AddressForm"
import CardSection from "../forms/CardSection";
import StripeLogo from "../assets/images/stripe.png";
import FancyButton from "../components/FancyButton";

const PaymentWrapper = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  justify-content: center;
  align-items: center;

  .card-box {
    width: 100%;
    padding: 2rem;
    background-color: #21243e;
    color: white;
    border-radius: 10px;

    h3 {
      text-align: center;
      font-weight: 400;
    }

    @media screen and (min-width: 740px) {
      width: 80%;
    }
  }
`;

const PoweredByStripe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  img {
    height: 16px;
  }
`;

const PaymentPage = () => {
  const { userStore } = useStores();

  const [submitting, setSubmitting] = useState(false)
  const [billingDetails, setBillingDetails] = useState({
    address1: "",
    address2: "",
    state: "",
    postcode: "",
    country: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmitting(true)
  }

  return (
    <Layout>
      <HomeNav />
      <PaymentWrapper>
        <div className="card-box">
          <div className="row">
            <div className="col-12 col-lg-6">
              <PaymentSummary billingDetails={billingDetails} name={userStore.userData.user.name}/>
            </div>
            <div className="col-12 col-lg-6">
              <h3>Complete Payment</h3>
              <form onSubmit={e => handleSubmit(e)}>
                <AddressForm
                  billingDetails={billingDetails}
                  setBillingDetails={setBillingDetails}
                  submitting={submitting}
                />
                <CardSection />
                <FancyButton size="block" disabled={submitting ? true : false}>Pay Now!</FancyButton>
                <PoweredByStripe>
                  <small>Powered by </small>
                  <img className="ml-2" src={StripeLogo} alt="stripe" />
                </PoweredByStripe>
              </form>
            </div>
          </div>
        </div>
      </PaymentWrapper>
    </Layout>
  );
};

export default observer(PaymentPage);
