import React, { useState } from "react";
import { observer } from "mobx-react";
import useStores from "../hooks/useStores";
import styled from "styled-components";
import Layout from "../components/Layout";
import HomeNav from "../components/HomeNav";
import AddressForm from "../forms/AddressForm"
import CardSection from "../forms/CardSection";
import StripeLogo from "../assets/images/stripe.png";
import FancyButton from "../components/FancyButton";
import moment from "moment"

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

const PaymentSummary = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  color: black;
  padding: 0.8rem;

  h2 {
    font-weight: 400;
  }

  .right {
    text-align: right;
  }

  small {
    display: block;
    font-weight: 500;
  }
`;

const PaymentPage = () => {
  const { userStore } = useStores();
  const [billingDetails, setBillingDetails] = useState({
    address1: "",
    address2: "",
    state: "",
    postcode: "",
    country: ""
  })
  const date = moment().add(365,'days');

  return (
    <Layout>
      <HomeNav />
      <PaymentWrapper>
        <div className="card-box">
          <div className="row">
            <div className="col-12 col-lg-6">
              <PaymentSummary>
                <h2>Order Summary:</h2>
                <hr />
                <h5>Billing Details:</h5>
                <p>Billing Name:</p>
                <small>{userStore.userData.user.name}</small>
                <p>Billing Address:</p>
                <small>{billingDetails.address1}</small>
                <small>{billingDetails.address2}</small>
                <small>{billingDetails.state}</small>
                <small>{billingDetails.postcode}</small>
                <small>{billingDetails.country}</small>
                <h5>Product:</h5>
                <div className="row">
                  <div className="col-6">
                    <p>Membership @ 1 Year</p>
                    <small>Expires On: {date.format("Do MMMM YYYY")}</small>
                  </div>
                  <div className="col-6">
                    <p className="right">USD499</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-6">
                    <h2>Total:</h2>
                  </div>
                  <div className="col-6">
                    <h2 className="right">USD499</h2>
                  </div>
                </div>
              </PaymentSummary>
            </div>
            <div className="col-12 col-lg-6">
              <h3>Complete Payment</h3>
              <form>
                <AddressForm
                  billingDetails={billingDetails}
                  setBillingDetails={setBillingDetails}
                />
                <CardSection />
                <FancyButton size="block">Pay Now!</FancyButton>
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
