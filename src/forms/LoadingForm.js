import React from 'react'
import styled from "styled-components"
import LoadingIndicator from "../assets/images/loader.svg"

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: white;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: 0.5s ease-in-out;

  h4 {
    text-align: center;
    font-weight: 400;
  }

  @media screen and (min-width: 740px) {
    width: 60%;
  }
`;

const Loader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LoadingForm = ({loading, message, children}) => {
  return (
    <Container>
      <FormContainer>
        {
          loading ? (
            <Loader>
              <img src={LoadingIndicator} alt="loader" />
              <small>{message}...</small>
            </Loader>
          ) : children
        }
      </FormContainer>
    </Container>
  )
}

export default LoadingForm
