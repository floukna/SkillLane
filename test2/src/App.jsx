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
        {/* <Grid
          style={{ height: 600 }}
          container
          direction="column"
          alignItems="center"
          justify="space-around"
        >
          <Logo />
          <div>
            Hello Vite <A href="https://reactjs.org">React</A> +&nbsp;
            <A href="">Material-Ui</A> +&nbsp;
            <A href="https://styled-components.com">styled-components</A>!
          </div>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
          <div>
            Edit <code>App.jsx</code> and save to test HMR updates.
          </div>
          <div>
            Build with <A href="https://vitejs.dev">Vite เทสนะะ</A>
          </div>
          <Rating name="half-rating-read" defaultValue={4.7} precision={0.5} readOnly />
        </Grid> */}
      </div>
    )
  })
}
