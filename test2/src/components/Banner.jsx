import { Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { Marginer } from './marginer'
import { ButtonRadius } from './common'
import Rating from '@material-ui/lab/Rating'
import Button from '@material-ui/core/Button'
import ShareIcon from '@material-ui/icons/Share'

const BannerStyle = styled.div`
  background-image: url('https://resource.skilllane.com/banner_academic/tu_banner.png');
  background-size: cover;
  height: 250px;
  @media (max-width: 1024px) {
    height: auto;
    padding: 35px 1rem 20px 1rem;
  }
  .content {
    display: flex;
    justify-content: center;
    height: 100%;
    max-width: 1140px;
    margin: auto;
    flex-direction: column;
  }
  .score {
    color: #8e8e8e;
    font-size: 1.33em;
    margin: 0 0.5rem;
  }
  .box {
    display: inline;
    position: relative;
    top: -5px;
  }
`

const Banner = () => {
  return (
    <>
      <BannerStyle>
        <div className="content">
          <div style={{ color: '#d13434' }}>
            <img
              height={12}
              src="https://resource.skilllane.com/tu/icon-tuxsa.png"
              style={{ marginRight: '2px' }}
            />{' '}
            หลักสูตรปริญญาโทออนไลน์
          </div>
          <Marginer direction="vertical" margin="0.5rem" />
          <div style={{ fontSize: '28px', color: '#676767' }}>
            Design Thinking กระบวนการคิดเชิงออกแบบ
          </div>
          <Marginer direction="vertical" margin="0.5rem" />
          <div>
            <ButtonRadius>
              ปริญญาโทบริหารธุรกิจ สาขา Business Innovation
            </ButtonRadius>
          </div>
          <Marginer direction="vertical" margin="0.8rem" />
          <div>
            <Rating size="large" defaultValue={4.5} precision={0.5} />
            <div className="box">
              <span className="score">4.7 (681 รีวิว)</span>
              <Button
                variant="outlined"
                color="default"
                // className={classes.button}
                style={{ height: '27px', color: '#024825' }}
                startIcon={<ShareIcon />}
              >
                แชร์คอร์สนี้
              </Button>
            </div>
          </div>
        </div>
      </BannerStyle>
    </>
  )
}

export default Banner
