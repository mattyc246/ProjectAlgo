import React, { useState, useEffect } from "react";
import axios from 'axios'
import url from "../constants/urls"
import { observer } from "mobx-react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import useStores from "../hooks/useStores";
import styled from "styled-components";
import Layout from "../components/Layout";
import HomeNav from "../components/HomeNav";
import PaymentSummary from "../components/PaymentSummary"
import AddressForm from "../forms/AddressForm"
import CardSection from "../forms/CardSection";
import StripeLogo from "../assets/images/stripe.png";
import FancyButton from "../components/FancyButton";
import { useToasts } from "react-toast-notifications";

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
  const { addToast } = useToasts()
  const stripe = useStripe();
  const elements = useElements();
  const [paymentIntent, setPaymentIntent] = useState(null)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [billingDetails, setBillingDetails] = useState({
    cardHolderName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    country: ""
  })

  useEffect(() => {
    axios.get(url.requestPaymentIntent())
    .then((response) => {
      setPaymentIntent(response.data.data)
    })
    .catch((err) => {
      console.log(err)
      addToast('Error: Please try refreshing the page', {appearance: 'error'})
    })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) return;

    setSubmitting(true)

    const result = await stripe.confirmCardPayment(paymentIntent, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: billingDetails.cardHolderName,
        },
      }
    });

    if (result.error) {
      setSubmitting(false)
      addToast(result.error.message, {appearance: 'error'})
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        setPaymentSuccess(true)
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
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
                  paymentSuccess={paymentSuccess}
                />
                <CardSection billingDetails={billingDetails} setBillingDetails={setBillingDetails} />
                <FancyButton size="block" disabled={submitting || !paymentIntent ? true : false}>Pay Now!</FancyButton>
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
