import React from 'react'
import { Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  gridItem: {
    flex: 2,
    margin: theme.spacing(8),
  }
})

export default withStyles(styles) (({ classes }) => {
  return(  
    <Typography 
      className={classes.gridItem} 
      variant="h2" 
      color="error" 
      align="center"
    >
      Welcome to this amalgamation of character-related bidness for your game.  Please select a tab.
    </Typography>
  )
})
