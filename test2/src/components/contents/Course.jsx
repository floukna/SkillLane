import React from 'react'
import styled, { css } from 'styled-components'
import Typography from '@material-ui/core/Typography'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite'
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import AssignmentIcon from '@material-ui/icons/Assignment'
import { MOCKDATA } from './mock'

const CourseContainer = styled.div`
  margin: 0px 0px 10px 0px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  .icon {
    fill: #5c7635;
  }
`

const Title = styled.div`
  width: 100%;
  font-weight: bold;
  padding: 5px;
  margin: 0px 0px 1px 0px;
  color: #fff;
  background-color: #7b7b7b;
  padding: 5px;
`

const Content = styled.div`
  margin: 8px;
  display: grid;
  grid-template-columns: 70% 20% 10%;
  .icon {
    margin-right: 8px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 38% 40% 22%;
    .icon {
      height: fit-content;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 27% 48% 25%;
  }
  .name {
    grid-auto-flow:column;  
    display: inline;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-wrap: break-word; /* Important for long words! */
  }
  .last {
      justify-self: self-end;
    }
  .mid {
    display: flex;
    justify-content: flex-end;
  }
  ${(props) =>
    props.free &&
    css`
      &:hover {
        cursor: pointer;
        color: #04542b;
        .icon {
          fill: #04542b;
        }
      }
    `}
`

const Free = styled.div`
  background: #5cb85c;
  color: white;
  font-weight: bold;
  border-radius: 0.25em;
  /* width: 80px; */
  padding: 2px 4px;
  text-align: center;
  font-size: 12px;
  @media (max-width: 768px) {
    padding: 2px 2.5px;
    /* width: 0%; */
  }
`

const ExampleFree = () => <Free className="icon">ดูตัวอย่างฟรี</Free>

const Course = () => {
  const renderIcon = (data) => {
    const list = []
    if (data.free) {
      list.push(<ExampleFree />)
    }
    if (data.quiz) {
      list.push(<AssignmentTurnedInIcon className="icon" fontSize="small" />)
    }
    if (data.test) {
      list.push(<AssignmentIcon className="icon" fontSize="small" />)
    }
    if (data.doc) {
      list.push(<AssignmentReturnedIcon className="icon" fontSize="small" />)
    }
    if (!data.quiz && !data.test) {
      list.push(<PlayCircleFilledWhiteIcon className="icon" fontSize="small" />)
    }
    return list
  }

  return (
    <>
      <Typography variant="h3">เนื้อหาของคอร์สนี้</Typography>
      <CourseContainer>
        {MOCKDATA.map((val) => (
          <div>
            <Title>{val.title}</Title>
            {val.detail.map((vall) => (
              <Content free={vall.free}>
                <div className="name">
                  {vall.seq ? `${vall.seq}.` : ''} {vall.content}
                </div>
                <div className="mid">
                  {renderIcon(vall)}
                </div>
                <div className="last">{vall.time}</div>
              </Content>
            ))}
          </div>
        ))}
      </CourseContainer>
    </>
  )
}

export default Course
