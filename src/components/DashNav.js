import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Graph from "../assets/icons/report-white.png";
import Burger from "../assets/icons/open-menu.png";
import Exit from "../assets/icons/logout.png";
import { useToasts } from "react-toast-notifications";
import useStores from "../hooks/useStores";

const Nav = styled.nav`
  height: 100%;
  width: ${(props) => (props.expanded ? "20%" : "5%")};
  background-color: #21243e;
  transition: 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  overflow-y: hidden;
  z-index: 2;

  img {
    width: 20px;
    cursor: pointer;
  }
`;

const NavBrand = styled.div`
  min-width: 288px;
  border-bottom: 1px solid white;
  padding: 1rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h5 {
    margin: 0 5px;
    color: white;
  }

  .brand {
    display: flex;
    align-items: center;
    opacity: ${(props) => (props.expanded ? "1" : "0")};
    transition: 0.5s ease;
  }
`;

const NavBox = styled.div`
  min-width: 288px;
  flex-grow: 1;
  padding: 1rem 1.6rem;
`;

const NavFooter = styled.div`
  min-width: 288px;
  border-top: 1px solid white;
  padding: 1rem 1.6rem;
`;

const NavButton = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  small {
    color: white;
    opacity: ${(props) => (props.expanded ? "1" : "0")};
    transition: 0.5s ease;
  }
`;

const DashNav = ({ expanded, setExpanded }) => {
  const { addToast } = useToasts();
  const {userStore} = useStores();

  return (
    <Nav expanded={expanded}>
      <NavBrand expanded={expanded}>
        <img
          className="burger"
          src={Burger}
          alt="burger"
          onClick={() => setExpanded(!expanded)}
        />
        <div className="brand">
          <img src={Graph} alt="logo" width="25px" />
          <h5>ProjectAlgo</h5>
        </div>
      </NavBrand>
      <NavBox></NavBox>
      <NavFooter>
        <NavButton
          onClick={() => userStore.logout(addToast)}
          expanded={expanded}
        >
          <img src={Exit} alt="sign-out" width="25px" />
          <small>Sign Out</small>
        </NavButton>
      </NavFooter>
    </Nav>
  );
};

export default DashNav;
