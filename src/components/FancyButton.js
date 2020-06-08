import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  background-color: #41487b;
  color: white;
  width: ${(props) => (props.size === "sm" ? "100px" : "200px")};
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
