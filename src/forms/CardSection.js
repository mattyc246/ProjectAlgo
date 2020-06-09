import React from "react";
import styled from "styled-components"
import { CardElement } from "@stripe/react-stripe-js";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const FancyFormGroup = styled.div`
  width: 100%;

  input {
    display: block;
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.6rem;
    border-radius: 5px;
    border: 1px solid #707070;
    outline: none;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);

    :focus {
      border: 2px solid #6773e2;
      padding: calc(0.6rem - 1px);
      transition: 0.5s ease-in-out;
    }
  }
`;

const CardSection = ({billingDetails, setBillingDetails}) => {

  const handleChange = (e) => {
    let newState = {...billingDetails}
    newState[e.target.name] = e.target.value
    setBillingDetails(newState)
  }
  return (
    <>
    <h5>Card Details:</h5>
    <FancyFormGroup>
      <input type="text" name="cardHolderName" value={billingDetails.cardHolderName} onChange={e => handleChange(e)} placeholder="Cardholder Name"/>
    </FancyFormGroup>
    <CardElement options={CARD_ELEMENT_OPTIONS} />
    </>
  );
}

export default CardSection;
