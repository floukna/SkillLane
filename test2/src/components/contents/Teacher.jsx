import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { MOCK_TEACHER } from './mock'
import StarIcon from '@material-ui/icons/Star'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite'

const Head = styled.div`
  height: 49px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  padding: 0 1rem;
  @media (max-width: 1024px) {
    display: none;
  }
`

const DetailBox = styled.div`
  display: grid;
  grid-template-columns: 30% auto;
  grid-column-gap: 1.5rem;
  margin: 1rem 0;
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 10% auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: 25% auto;
  }
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    display: block;
    margin: auto;
  }
  .text {
    font-size: 11px;
    color: #555555;
  }
  .icon {
    position: relative;
    top: 3px;
  }
`

const Name = styled.a`
  font-weight: bold;
  font-size: 1em;
  word-break: break-word;
  color: #024825;
  text-decoration: none;
`

const Detail = styled.ul`
  padding-left: 2rem;
  list-style-type: disc;
  word-break: break-word;
  color: #676767;
`

const Box = styled.div`
  ${(props) => props.showLine && 'border-bottom: 1px solid #cccccc;'}
`

const Teacher = () => {
  return (
    <>
      <Head>
        <Typography style={{ fontWeight: 'bold' }} variant="h3">
          ผู้สอน
        </Typography>
      </Head>
      {MOCK_TEACHER.map((val, index) => (
        <Box showLine={index != MOCK_TEACHER.length - 1}>
          <DetailBox>
            <img src={val.image} />
            <div>
              <Name href="https://www.google.com">{val.name}</Name>
              <div style={{ margin: '2px 4px' }}>
                <div>
                  <StarIcon className="icon" fontSize="small" />{' '}
                  <span className="text">{val.score}</span>
                </div>
                <div>
                  <StarIcon className="icon" fontSize="small" />{' '}
                  <span className="text">{val.review}</span>
                </div>
                <div>
                  <PlayCircleFilledWhiteIcon
                    className="icon"
                    fontSize="small"
                  />{' '}
                  <span className="text">{val.course}</span>
                </div>
              </div>
            </div>
          </DetailBox>
          <Detail>
            {val.detail.map((vall) => (
              <li>{vall}</li>
            ))}
          </Detail>
        </Box>
      ))}
    </>
  )
}

export default Teacher
