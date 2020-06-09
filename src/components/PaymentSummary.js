import React from "react";
import styled from "styled-components";
import moment from 'moment'

const SummaryContainer = styled.div`
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

const date = moment().add(365, "days");

const PaymentSummary = ({ billingDetails, name }) => {
  return (
    <SummaryContainer>
      <h2>Order Summary:</h2>
      <hr />
      <h5>Billing Details:</h5>
      <p>Billing Name:</p>
      <small>{name}</small>
      <p>Billing Address:</p>
      <small>{billingDetails.address1}</small>
      <small>{billingDetails.address2}</small>
      <small>{billingDetails.state}</small>
      <small>{billingDetails.postcode}</small>
      <small>{billingDetails.country}</small>
      <h5>Product:</h5>
      <div className="row">
        <div className="col-6">
          <small>Membership @ 1 Year</small>
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
    </SummaryContainer>
  );
};

export default PaymentSummary;
