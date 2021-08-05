import styled from 'styled-components'

const ContainerStyle = styled.div`
  max-width: 1140px;
  margin: auto;
  @media (max-width: 1024px) {
    padding: 0 1rem;
  }
`

const Container = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>
}

export default Container
