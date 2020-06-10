import React from 'react'
import styled from "styled-components";
import HomeNav from "../components/HomeNav"
import FancyLink from "../components/FancyLink"
import ContentWrapper from "../containers/ContentWrapper"
import Footer from "../components/Footer"
import Chart from "../assets/images/chart.png";
import MockUp from "../assets/images/mockup.png"
import Discord from "../assets/icons/discord.png"
import Book from "../assets/icons/book.png"
import Code from "../assets/icons/code.png"

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

const ContentCard =  styled.div`
  width: 100%;

  h5 {
    font-weight: 500;
    text-align: center;
    color: ${props => props.color === "white" ? "white" : "black"};
  }

  img {
    width: 50%;
    display: block;
    margin: 3rem auto;
  }

  p {
    text-align: justify;
    color: ${props => props.color === "white" ? "white" : "black"};
  }
`

const ContentTitle = styled.h3`
  font-weight: 600;
  color: ${props => props.color === "white" ? "white" : "black"};
  text-align: center;
`

const ContentBody = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 2rem;
  color: ${(props) => (props.color === "white" ? "white" : "black")};
  text-align: justify;
`;

const HomePage = () => {
  return (
    <>
      <HomeNav />
      <HeroWrapper>
        <div className="row">
          <div className="col-12 col-lg-8">
            <h1 className="my-5">
              Turn your trading strategies Into automated algorithms…
            </h1>
            <h3 className="my-5">EXCLUSIVE INVITATIONAL MEMBERSHIP!</h3>
            <FancyLink to="/">FIND OUT MORE</FancyLink>
          </div>
          <div className="col-12 col-lg-4">
            <img src={Chart} alt="chart" />
          </div>
        </div>
      </HeroWrapper>
      <ContentWrapper bgColor="primary">
        <ContentTitle color="white">WHAT DO WE OFFER?</ContentTitle>
        <ContentBody color="white">
          We are an exclusive membership only community that will help turn your
          trading strategies into automated trading bots. Our core team is
          comprised of experienced software developers and traders in the
          cryptocurrency market. Through our expertise and interest in
          automating trading through algorithmic trading bots, we are now
          offering the chance for you to turn your strategies into automated
          trading bots too. Put your strategies to vote and our team will code
          the bots based off your strategy. See the live results of your
          strategy in action and statistical data on how it performs. Hold
          discussions amongst the community and share your trading tips and
          tricks with each other. Once you gain membership to the community, you
          will then have access to invite your own members in.
        </ContentBody>
      </ContentWrapper>
      <ContentWrapper>
        <ContentTitle>HOW MUCH DOES IT COST?</ContentTitle>
        <div className="row">
          <div className="col-12 col-lg-7">
            <ContentBody>
              Our membership is charged on a yearly basis and this grants you
              24/7, all year round access to our live dashboard where you can
              see all the algorithms in action and access the statistical data
              about how the different strategies and algorithms are performing.{" "}
            </ContentBody>
            <ContentBody>
              On top of this, we offer a 7-day no questions asked money back
              guarantee. For whatever reason, if you decide our platform is not
              right for you, you are entitled to a full refund.
            </ContentBody>
            <FancyLink to="/" center={true}>USD499 / Year</FancyLink>
          </div>
          <div className="col-12 col-lg-4 offset-lg-1">
            <img src={MockUp} alt="mockup" width="100%" />
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper bgColor="primary">
        <ContentTitle color="white">WHAT DO I GET ACCESS TO?</ContentTitle>

          <div className="row">
            <div className="col-12 col-lg-4">
              <ContentCard color="white">
                <h5>PRIVATE DISCORD SERVER</h5>
                <img src={Discord} alt="discord icon" />
                <p>
                  Exclusive access to our dedicated Discord server. Hold
                  discussions on trading strategies or anything related to
                  stocks, commodities or cryptocurrency.
                </p>
              </ContentCard>
            </div>
            <div className="col-12 col-lg-4">
              <ContentCard color="white">
                <h5>EXCLUSIVE GUIDES</h5>
                <img src={Book} alt="book icon" />
                <p>
                  Access to guides on how to setup your algorithmic trading bots
                  with various broker platforms. Learn some basics on writing
                  trading bots.
                </p>
              </ContentCard>
            </div>
            <div className="col-12 col-lg-4">
              <ContentCard color="white">
                <h5>EXPERIENCED PROGRAMMERS</h5>
                <img src={Code} alt="code icon" />
                <p>
                  A core team of experienced programmers with varying expertise.
                  Each with a shared interest in financial investment and
                  algorithmic trading bots.
                </p>
              </ContentCard>
            </div>
          </div>
      </ContentWrapper>
      <Footer />
    </>
  );
}

export default HomePage
