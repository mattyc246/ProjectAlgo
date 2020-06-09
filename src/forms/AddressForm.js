import React from 'react'
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

const AddressForm = ({billingDetails, setBillingDetails}) => {

  const handleChange = (e) => {
    let newState = {...billingDetails}

    newState[e.target.name] = e.target.value

    setBillingDetails(newState)
  }

  return (
    <div className="row">
      <div className="col-12">
        <h5 className="left">Billing Address:</h5>
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
