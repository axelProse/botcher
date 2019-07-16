import React from 'react';
import { Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  paper: {
    padding: theme.spacing(2.5),
    marginTop: theme.spacing(6),
    //height: 200,  // instead of a defined height, should this be done differently?  Actually, 
    // should the entire SkillTab layout be within a grid so I can have flex values for those?  
    // For now, gonna see if I even need to do that or if it plays nicely.  
    overflowY: 'auto',
  },
  typography: {
    color: theme.palette.text.secondary.main,
  },
})

export default withStyles(styles)(({classes, characterInfo}) => {
  
    const {
      characterName,
      wounds, 
      rank,
      experience,
      bennies,
    } = characterInfo;

  return (
    <Paper className={classes.paper}>
      <Typography variant="h3"  className={classes.typography}> 
        Name: {characterName}
      </Typography>
      <Typography variant="h4" color="primary">
        <div>Wounds: {wounds}</div>
        <div>Rank: {rank}</div>
        <div>Experience: {experience}</div>
        <div>Bennies: {bennies}</div>
      </Typography>
    </Paper>
  );
})
