import React from 'react'
import Loader from "../assets/images/loader-alt.svg"
import styled from "styled-components"

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

const LoaderBox = styled.div`
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AddressForm = ({billingDetails, setBillingDetails, submitting, paymentSuccess}) => {

  const handleChange = (e) => {
    let newState = {...billingDetails}

    newState[e.target.name] = e.target.value

    setBillingDetails(newState)
  }

  if(paymentSuccess){
    return(
      <LoaderBox>
        <h2>Payment Successful!</h2>
        <img src={Loader} alt="loader" />
        <h6>Please wait while you are redirected.</h6>
      </LoaderBox>
    )
  }

  if(submitting){
    return (
      <LoaderBox>
        <img src={Loader} alt="loader" />
        <small>Payment processing, please wait...</small>
        <small>Note: DO NOT refresh the page.</small>
      </LoaderBox>
    );
  }

  return (
    <div className="row">
      <div className="col-12">
        <h5>Billing Address:</h5>
      </div>
      <div className="col-6">
        <FancyFormGroup>
          <input
            type="text"
            name="address1"
            value={billingDetails.address1}
            placeholder="Address Line 1"
            onChange={(e) => handleChange(e)}
          />
        </FancyFormGroup>
      </div>
      <div className="col-6">
        <FancyFormGroup>
          <input
            type="text"
            name="address2"
            value={billingDetails.address2}
            placeholder="Address Line 2"
            onChange={(e) => handleChange(e)}
          />
        </FancyFormGroup>
      </div>
      <div className="col-12">
        <FancyFormGroup>
          <input
            type="text"
            name="city"
            value={billingDetails.city}
            placeholder="City"
            onChange={(e) => handleChange(e)}
          />
        </FancyFormGroup>
      </div>
      <div className="col-12">
        <FancyFormGroup>
          <input
            type="text"
            name="state"
            value={billingDetails.state}
            placeholder="State / Province"
            onChange={(e) => handleChange(e)}
          />
        </FancyFormGroup>
      </div>
      <div className="col-12">
        <FancyFormGroup>
          <input
            type="text"
            name="postcode"
            value={billingDetails.postcode}
            placeholder="Postcode / Zip"
            onChange={(e) => handleChange(e)}
          />
        </FancyFormGroup>
      </div>
      <div className="col-12">
        <FancyFormGroup>
          <input
            type="text"
            name="country"
            value={billingDetails.country}
            placeholder="Country"
            onChange={(e) => handleChange(e)}
          />
        </FancyFormGroup>
      </div>
    </div>
  );
}

export default AddressForm
