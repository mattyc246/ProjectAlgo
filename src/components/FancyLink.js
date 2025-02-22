import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  background-color: #41487b;
  color: white!important;
  justify-content: center;
  width: ${props => props.size === "sm" ? "100px" : "200px"};
  height: 40px;
  padding: 0 1rem;
  font-weight: 500;
  text-decoration: none;
  font-size: smaller;
  margin: 1rem ${props => props.center ? 'auto' : 0};
`;

const FancyLink = (props) => {
  return <StyledLink {...props}>{props.children}</StyledLink>;
};

export default FancyLink;
