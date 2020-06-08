import React from 'react'
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  padding: 2rem 5rem;

  .link-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  small {
    display: block;
    text-align: center;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <small>© 2020 ProjectAlgo</small>
    </StyledFooter>
  );
}

export default Footer
