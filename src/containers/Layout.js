import React from 'react'
import styled from 'styled-components'
import Background from '../assets/images/memphis-mini.png'

const BgLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: url(${Background});
  position: relative;
`

const Layout = (props) => {
  return (
    <BgLayout {...props}>
      {props.children}
    </BgLayout>
  )
}

export default Layout
