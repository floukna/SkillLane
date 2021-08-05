import React from 'react'
import { useStyles } from '../hooks/useStyle'

const styles = (theme) => ({
  ratio16per9: {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%' /* 16:9 Aspect Ratio */,
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})

const AspectRatio16per9 = ({ children }) => {
  const classes = useStyles(styles)
  return (
    <div className={classes.ratio16per9}>
      <div className={classes.content}>{children}</div>
    </div>
  )
}

export { AspectRatio16per9 }
