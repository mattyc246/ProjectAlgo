import React, {useState} from 'react'
import styled from "styled-components"
import Texture from "../assets/images/memphis-mini.png"
import DashNav from '../components/DashNav'

const BehindContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-image: url(${Texture});
`

const FrontLayer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255,0.5);
  display: flex;
  align-items: center;
`

const MainContent = styled.div`
  width: ${props => props.expanded ? "80%" : "95%"};
  height: 100%;
  padding: 1rem;
  transition: 0.5s ease;
`

const DashboardLayout = ({children}) => {
  const [expanded, setExpanded] = useState(true)

  return (
    <BehindContainer>
      <FrontLayer>
        <DashNav expanded={expanded} setExpanded={setExpanded} />
        <MainContent expanded={expanded}>
          {children}
        </MainContent>
      </FrontLayer>
    </BehindContainer>
  )
}

export default DashboardLayout
