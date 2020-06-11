import React from "react";
import styled from "styled-components";
import Loader from "../assets/images/loader-alt.svg"

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
  outline: none;
  margin: 1rem ${(props) => (props.center ? "auto" : 0)};
  cursor: pointer;

  :disabled {
    opacity: 0.5;
  }
`;

const FancyButton = (props) => {
  return <StyledButton {...props}>{props.loading ? (
    <img src={Loader} alt="loader" width="25px"/>
  ) : props.children}</StyledButton>;
};

export default FancyButton;
