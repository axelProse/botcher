import React from 'react';
import { Button, Card, Grid, Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  card: {
    padding: theme.spacing(1.5), 
    margin: theme.spacing(1),
  },
  header: {
    textTransform: 'capitalize',
  }, 
  textBlock: { // I started messing with flexing the layout of skills; didn't want to mess with padding right now.  
    //flex: 2 
  },
  button: { // Really, should play with the breakpoints for these sorts of layout changes anyway.  
    //flex: 1,
    //flexShrink: 2,
  }
})

export default withStyles(styles) (({classes, skill, addToRollQueue}) => {
   
  return(
    <Card className={classes.card}>
      <Grid container 
        justify="space-between"
      >
      <div>
         {/* className={classes.textBlock}> */}
        <Typography 
          className={classes.header} 
          variant='h5'
        > 
          {skill.name}  
        </Typography>
        <Typography variant="subtitle1">
          <div>Die type: {skill.dieType}</div>
          <div>Description: {skill.description}</div>
        </Typography>
      </div>
      <Button 
        className={classes.button}
        variant="contained" 
        color="secondary"                  
        onClick={() => addToRollQueue(skill)}
      >
        Roll {skill.name}
      </Button>
      </Grid> 
    </Card>
  );
})
