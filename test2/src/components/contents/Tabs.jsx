import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import styled from 'styled-components'
import Detail from './Detail'
import Course from './Course'
import Teacher from './Teacher'

// const Content = styled.

const Content = styled.div`
  max-height: ${(props) => (!props.more ? `130px` : '1025px')};
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  position: relative;
  line-height: 1.5;
`

const Button = styled.div`
  text-align: center;
  color: #024825;
  cursor: pointer;
  .line:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    /* border-bottom: 2px solid red; */
  }
`

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #cccccc',
  },
  indicator: {
    backgroundColor: '#024825',
    height: '5px',
  },
})(Tabs)

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontSize: '1.33em',
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    '&:hover': {
      //   color: '#40a9ff',
      background: '#ccc',
      opacity: 0.8,
    },
    '&$selected': {
      color: '#024825',
      fontWeight: theme.typography.fontWeightMedium,
    },
    // '&:focus': {
    //   color: '#40a9ff',
    // },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />)

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      style={{ marginTop: '14px', overflow: 'hidden' }}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0)
  const [more, setMore] = React.useState(false)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const matches = useMediaQuery('(max-width: 1024px)')
  React.useEffect(() => {
    setValue(0)
  } , [matches])

  return (
    <>
      {matches ? (
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="รายละเอียด" />
          <AntTab label="ผู้สอน" />
          <AntTab label="รีวิว" />
        </AntTabs>
      ) : (
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="รายละเอียด" />
          <AntTab label="วิธีการชำระเงิน" />
          <AntTab label="ห้องสนทนา" />
          <AntTab label="รีวิว" />
        </AntTabs>
      )}
      <TabPanel value={value} index={0}>
        <Detail setMore={setMore} more={more} />
        <Course />
      </TabPanel>
      {matches ? (
        <>
          <TabPanel value={value} index={1}>
            <Teacher />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <p>รีวิว</p>
          </TabPanel>
        </>
      ) : (
        <>
          <TabPanel value={value} index={1}>
            <p>วิธีการชำระเงิน</p>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <p>ห้องสนทนา</p>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <p>รีวิว</p>
          </TabPanel>
        </>
      )}
    </>
  )
}
