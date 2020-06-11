import React, { useState } from "react";
import PAGES from "../constants/pages";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Graph from "../assets/icons/report-white.png";
import Burger from "../assets/icons/open-menu.png";
import Exit from "../assets/icons/logout.png";
import { useToasts } from "react-toast-notifications";
import useStores from "../hooks/useStores";

const Nav = styled.nav`
  height: 100%;
  width: ${(props) => (props.expanded ? "288px" : "72px")};
  background-color: #21243e;
  transition: 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  overflow-y: hidden;
  z-index: 2;
`;

const NavBrand = styled.div`
  min-width: 288px;
  border-bottom: 1px solid white;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .burger {
    width: 25px;
    cursor: pointer;
    transform: ${(props) =>
      props.expanded ? "rotate(180deg)" : "rotate(0deg)"};
    transition: 0.5s ease;
  }

  h5 {
    margin: 0;
    margin-left: 10px;
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
  padding: 1rem 1.5rem;
`;

const NavFooter = styled.div`
  min-width: 288px;
  border-top: 1px solid white;
  padding: 1rem 1.5rem;
`;

const NavButton = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;

  small {
    color: white;
    font-weight: 500;
    padding-right: 2rem;
    opacity: ${(props) => (props.expanded ? "1" : "0")};
    transition: 0.5s ease;
  }
`;

const DashNav = () => {
  const { addToast } = useToasts();
  const { userStore } = useStores();
  const { menuExpanded, setExpanded } = userStore;
  const [pages, setPages] = useState(Object.keys(PAGES));
  return (
    <Nav expanded={menuExpanded}>
      <NavBrand expanded={menuExpanded}>
        <img
          className="burger"
          src={Burger}
          alt="burger"
          onClick={() => setExpanded(!menuExpanded)}
        />
        <div className="brand">
          <img src={Graph} alt="logo" width="30px" />
          <h5>ProjectAlgo</h5>
        </div>
      </NavBrand>
      <NavBox>
        {pages.map((page, idx) => {
          return (
            <NavButton
              key={idx}
              className={`mb-5 ${idx === 0 ? "mt-3" : ""}`}
              to={PAGES[page].to}
              expanded={menuExpanded}
            >
              <img src={PAGES[page].navIcon} alt={page} width="25px" />
              <small>{PAGES[page].title}</small>
            </NavButton>
          );
        })}
      </NavBox>
      <NavFooter>
        <NavButton
          onClick={() => userStore.logout(addToast)}
          expanded={menuExpanded}
        >
          <img src={Exit} alt="sign-out" width="25px" />
          <small>Sign Out</small>
        </NavButton>
      </NavFooter>
    </Nav>
  );
};

export default DashNav;
