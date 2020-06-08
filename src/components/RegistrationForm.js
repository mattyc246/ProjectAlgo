import React, {useState} from 'react'
import styled from 'styled-components'
import FancyButton from "./FancyButton"
import LoadingForm from "./LoadingForm"

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
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  return (
    <LoadingForm loading={loading} formType="registration">
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
        <FancyButton onClick={() => handleSubmit()} center>Submit</FancyButton>
      </form>
    </LoadingForm>
  )
}

export default RegistrationForm
