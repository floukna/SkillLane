import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = (styles) =>
  makeStyles((theme) => (styles(theme)))()
