import React from 'react'
import { Button } from '../common'
import styled from 'styled-components'
import DoneIcon from '@material-ui/icons/Done'
import CloseIcon from '@material-ui/icons/Close'
import { Marginer } from '../marginer'

const Box = styled.div`
  padding: 0px 15px 15px;
  border: 1px solid #aaa;
  .head {
    font-size: 2em;
    color: #676767;
    text-align: center;
    font-weight: bold;
    margin: 12px 0 2px 0;
  }
  ${(props) =>
    props.keep &&
    `
    .line {
        height: 4px;
        background-color: #04542b;
        margin: 0 -15px;
    }
  `}
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  grid-column-gap: 6px;
  .icon {
    font-weight: bold;
    position: relative;
    top: -4px;
  }
  .text {
    font-size: 0.96em;
    line-height: 1.3;
  }
`

const Container = styled.div`
  display: grid;
  grid-template-rows: 40% auto;
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0 40px;
    grid-template-columns: 60% auto;
    .item2 {
        order: 1;
    }
    .item1 {
        order: 2;
    }
  }
`

const CorrectIcon = () => (
  <DoneIcon style={{ fill: '#00532a' }} className="icon" fontSize="small" />
)
const CancelIcon = () => (
  <CloseIcon style={{ fill: '##8e8e8e' }} className="icon" fontSize="small" />
)
const BoxContent = ({ keep }) => {
  return (
    <Box keep={keep}>
      <div className="line" />
      <Container>
        <div className='item1'>
          <div className="head">{keep ? '4,500 บาท' : '1,500 บาท'}</div>
          <Button keep={keep}>
            {keep
              ? 'ชำระเงินเรียนเก็บหน่วยกิต'
              : 'ชำระเงินเรียนไม่เก็บหน่วยกิต'}{' '}
          </Button>
        </div>
        <div className='item2'>
          <Marginer direction="vertical" margin="12px" />
          <Content>
            <CorrectIcon />
            <div className="text">สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ</div>
          </Content>
          <Content>
            <CorrectIcon />
            <div className="text">
              เนื้อหาทั้งหมด 40 วิดีโอ ความยาวรวมกัน 7 ชั่วโมง 46 นาที
            </div>
          </Content>
          <Content>
            <CorrectIcon />
            <div className="text">เอกสารประกอบ</div>
          </Content>
          <Content>
            {!keep ? <CancelIcon /> : <CorrectIcon />}
            <div className="text">แบบทดสอบทั้งหมด 4 แบบทดสอบ</div>
          </Content>

          <Content>
            {!keep ? <CancelIcon /> : <CorrectIcon />}
            <div className="text">ข้อสอบทั้งหมด 1 ข้อสอบ</div>
          </Content>
          <Content>
            {!keep ? <CancelIcon /> : <CorrectIcon />}
            <div className="text">เก็บหน่วยกิตเรียนปริญญาโท</div>
          </Content>
          <Content>
            {!keep ? <CancelIcon /> : <CorrectIcon />}
            <div className="text">ประกาศนียบัตร</div>
          </Content>
        </div>
      </Container>
    </Box>
  )
}

export default BoxContent
