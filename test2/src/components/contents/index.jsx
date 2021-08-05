import React from 'react'
import styled from 'styled-components'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Tabs from './Tabs'
import Teacher from './Teacher'

const Container = styled.div`
  display: grid;
  grid-template-columns: 74% auto;
  grid-column-gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    margin-bottom: 0;
  }
`

const Contents = () => {
  const matches = useMediaQuery('(max-width: 1024px)')

  return (
    <Container>
      <div>
        <Tabs />
      </div>
      {!matches &&  <div>
          <Teacher />
      </div>}
     
    </Container>
  )
}

export default Contents
