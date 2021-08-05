import React from 'react'
import { AspectRatio16per9 } from '../aspect-ratio'
import styled from 'styled-components'
import BoxContent from './BoxContent';

const Container = styled.div`
  display: grid;
  grid-template-columns: 555px 1fr 1fr;
  grid-column-gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
  }
`



const VideoContent = () => {
  return (
    <Container>
      <AspectRatio16per9>
        <img width={'100%'} src='https://thumbs.dreamstime.com/b/christmas-background-banner-format-tree-branches-holly-star-anise-pink-copy-space-157176582.jpg' />
      </AspectRatio16per9>
      <BoxContent />
      <BoxContent keep />
    </Container>
  )
}

export default VideoContent
