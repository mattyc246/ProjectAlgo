import React from 'react'
import styled from 'styled-components'
import FancyButton from "./FancyButton"

const FormContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: white;
  box-shadow: 10px 10px 15px rgba(0,0,0,0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;

  h4 {
    text-align: center;
    font-weight: 400;
  }

  @media screen and (min-width: 740px){
    width: 60%;
  }
`

const FancyFormGroup = styled.div`
  width: 70%;
  margin: 1rem auto;

  label {
    display: block;
    font-weight: 500;
  }

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
      border: 2px solid #41487b;
      padding: calc(0.6rem - 1px);
      transition: 0.5s ease-in-out;
    }
  }
`;

const RegistrationForm = () => {
  return (
    <FormContainer>
      <h4>Registration</h4>
      <form>
        <FancyFormGroup>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Full Name"/>
        </FancyFormGroup>
        <FancyFormGroup>
          <label htmlFor="name">Email</label>
          <input type="text" name="email" placeholder="Valid Email"/>
        </FancyFormGroup>
        <FancyFormGroup>
          <label htmlFor="name">Password</label>
          <input type="password" name="password" placeholder="Password"/>
          <small>Required min. 8 characters.</small>
        </FancyFormGroup>
        <FancyFormGroup>
          <label htmlFor="name">Password Confirmation</label>
          <input type="password" name="password_confirm" placeholder="Password"/>
        </FancyFormGroup>
        <FancyButton center>Submit</FancyButton>
      </form>
    </FormContainer>
  )
}

export default RegistrationForm
