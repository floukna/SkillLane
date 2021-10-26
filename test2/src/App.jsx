import React from 'react'
import Banner from './components/Banner'
import { AppDecorator } from './AppDecorator'
import styled from 'styled-components'
import VideoContent from './components/video-content'
import { Marginer } from './components/marginer'
import Contents from './components/contents'


const Container = styled.div`
  max-width: 1140px;
  margin: auto;
  @media (max-width: 1024px) {
    padding: 0 1rem;
  }
`

export default function App() {
  return AppDecorator({})(function _App() {

    return (
      <div style={{ background: 'white', height: '100%'}}>
        <Banner/>
        <Marginer direction="vertical" margin="20px" />
        <Container>
          <VideoContent/>
          <Marginer direction="vertical" margin="20px" />
          <Contents />
        </Container>
      </div>
    )
  })
}
