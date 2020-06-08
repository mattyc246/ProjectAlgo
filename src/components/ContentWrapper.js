import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  background-color: ${(props) =>
    props.bgColor === "primary" ? "#21243E" : "white"};
  @media screen and (min-width: 740px) {
    padding: 2rem 10rem;
  }
`;

const ContentWrapper = (props) => {
  return (
    <Wrapper {...props}>{props.children}</Wrapper>
  )
}

export default ContentWrapper
