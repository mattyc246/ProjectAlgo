import React from "react";
import styled from "styled-components";
import PAGES from "../constants/pages";
import Texture from "../assets/images/memphis-mini.png";
import DashNav from "../components/DashNav";
import { observer } from "mobx-react";
import useStores from "../hooks/useStores";
import moment from "moment"

const BehindContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-image: url(${Texture});
`;

const FrontLayer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
`;

const MainContent = styled.div`
  width: ${(props) => (props.expanded ? "calc(100% - 288px)" : "calc(100% - 72px)")};
  height: 100%;
  transition: 0.5s ease;

  .content {
    width: 100%;
    height: calc(100% - 80px);
    padding: 1rem;
    overflow-y: scroll;
  }
`;

const TitleBar = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .page-title {
    display: flex;
    align-items: center;

    h5 {
      margin-left: 15px;
    }
  }

  .user-details {
    text-align: right;

    small {
      display: block;
      font-weight: 500;

      span {
        font-weight: 400;
      }
    }
  }
`;

const DashboardLayout = ({ children, page }) => {
  const { userStore } = useStores();
  const {user, membership} = userStore.userData;

  return (
    <BehindContainer>
      <FrontLayer>
        <DashNav />
        <MainContent expanded={userStore.menuExpanded}>
          <TitleBar>
            <div className="page-title">
              <img src={PAGES[page].icon} alt="icon" width="30px" />
              <h5>{PAGES[page].title}</h5>
            </div>
            <div className="user-details">
              <small>{user.name} | Membership Status: <span>Active</span></small>
              <small>Expires: <span>{moment(membership.end_date).format("Do MMMM YYYY")}</span></small>
            </div>
          </TitleBar>
          <div className="content">{children}</div>
        </MainContent>
      </FrontLayer>
    </BehindContainer>
  );
};

export default observer(DashboardLayout);
