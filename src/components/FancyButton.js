import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  background-color: #41487b;
  border: 0;
  color: white;
  width: ${(props) => (props.size === "sm" ? "100px" : (props.size === "block" ? "100%" : "200px"))};
  padding: 1rem;
  font-weight: 500;
  text-decoration: none;
  font-size: smaller;
  margin: 1rem ${(props) => (props.center ? "auto" : 0)};
`;

const FancyLink = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default FancyLink;
