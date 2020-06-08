import React from 'react'
import styled from "styled-components";
import Chart from "../assets/images/chart.png";
import HomeNav from "../components/HomeNav"
import FancyLink from "../components/FancyLink"
import ContentWrapper from "../components/ContentWrapper"

const HeroWrapper = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  padding: 0 3rem;

  img {
    width: 75%;
    display: block;
    margin: 0 auto;

    @media screen and (min-width: 740px){
      width: 100%;
    }
  }

  h3 {
    font-weight: 500;
  }

  .row {
    width: 100%;
  }
`

const HomePage = () => {
  return (
    <>
      <HomeNav />
      <HeroWrapper>
        <div className="row">
          <div className="col-12 col-lg-8">
            <h1 className="my-5">Turn your trading strategies Into automated algorithms…</h1>
            <h3 className="my-5">EXCLUSIVE INVITATIONAL MEMBERSHIP!</h3>
            <FancyLink to="/">FIND OUT MORE</FancyLink>
          </div>
          <div className="col-12 col-lg-4">
            <img src={Chart} alt="chart" />
          </div>
        </div>
      </HeroWrapper>
      <ContentWrapper>

      </ContentWrapper>
    </>
  );
}

export default HomePage
