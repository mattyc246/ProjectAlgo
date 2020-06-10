import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../constants/urls";
import { observer } from "mobx-react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import useStores from "../hooks/useStores";
import styled from "styled-components";
import Layout from "../containers/Layout";
import HomeNav from "../components/HomeNav";
import PaymentSummary from "../components/PaymentSummary";
import AddressForm from "../forms/AddressForm";
import CardSection from "../forms/CardSection";
import StripeLogo from "../assets/images/stripe.png";
import FancyButton from "../components/FancyButton";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";

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
  const { addToast } = useToasts();
  const history = useHistory()
  const stripe = useStripe();
  const elements = useElements();
  const [paymentIntent, setPaymentIntent] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    cardHolderName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
  });

  useEffect(() => {
    axios
      .get(url.requestPaymentIntent(), {
        headers: {
          Authorization: `Bearer ${userStore.userToken}`,
        },
      })
      .then((response) => {
        setPaymentIntent(response.data.data);
      })
      .catch((err) => {
        console.log(err);
        addToast("Error: Please try refreshing the page", {
          appearance: "error",
        });
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setSubmitting(true);

    const result = await stripe.confirmCardPayment(paymentIntent, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: billingDetails.cardHolderName,
        },
      },
    });

    if (result.error) {
      setSubmitting(false);
      addToast(result.error.message, { appearance: "error" });
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        setPaymentSuccess(true);
        addToast("Payment successful!", { appearance: "success", autoDismiss: true });

        const {
          id,
          payment_method_types,
          created,
          amount,
        } = result.paymentIntent;

        let paymentDetails = {
          payment_id: id,
          payment_method_type: payment_method_types[0],
          amount_paid: amount,
          billing_details: billingDetails,
          created_at: new Date(created * 1000).toISOString(),
        };

        axios
          .post(
            url.paymentSuccess(),
            {
              payment_details: paymentDetails,
            },
            {
              headers: {
                Authorization: `Bearer ${userStore.userToken}`,
              },
            }
          )
          .then((result) => {
            if(result.data.success){
              userStore.updateMembership(result.data.membership, history)
            } else {
              addToast('Unexpected error: Please contact for support', {appearance: 'error'})
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  return (
    <Layout>
      <HomeNav />
      <PaymentWrapper>
        <div className="card-box">
          <div className="row">
            <div className="col-12 col-lg-6">
              <PaymentSummary
                billingDetails={billingDetails}
                name={userStore.userData.user.name}
              />
            </div>
            <div className="col-12 col-lg-6">
              <h3>Complete Payment</h3>
              <form onSubmit={(e) => handleSubmit(e)}>
                <AddressForm
                  billingDetails={billingDetails}
                  setBillingDetails={setBillingDetails}
                  submitting={submitting}
                  paymentSuccess={paymentSuccess}
                />
                <CardSection
                  billingDetails={billingDetails}
                  setBillingDetails={setBillingDetails}
                />
                <FancyButton
                  size="block"
                  disabled={submitting || !paymentIntent ? true : false}
                >
                  Pay Now!
                </FancyButton>
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
