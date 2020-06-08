import React from 'react';
import styled from 'styled-components';
import Graph from "../assets/icons/report.png"
import FancyLink from "./FancyLink"
import {Link} from "react-router-dom"

const NavBar = styled.nav`
  width: 100%;
  height: 100px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavBrand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    height: 40px;
    width: 40px;
  }

  h2 {
    font-weight: 500;
  }
`

const NavLinks = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  a {
    font-weight: 500;
    color: black;
    text-decoration: none;
    font-size: smaller;
    margin-left: 1rem;

    @media screen and (min-width: 740px) {
      margin-left: 6rem;
    }
  }
`;

const HomeNav = () => {
  return (
    <NavBar>
      <NavBrand>
        <img src={Graph} alt="report" />
        <h2 className="ml-2">PROJECTALGO</h2>
      </NavBrand>
      <NavLinks>
        <Link to="/">CONTACT</Link>
        <FancyLink to="/login" size="sm">Log In</FancyLink>
      </NavLinks>
    </NavBar>
  )
}

export default HomeNav
