import React from 'react';
import { Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  paper: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(5),
    overflowY: 'auto',
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
      <Typography variant="h3">
        Name: {characterName}
      </Typography>
      <Typography variant="h4">
        <div>Wounds: {wounds}</div>
        <div>Rank: {rank}</div>
        <div>Experience: {experience}</div>
        <div>Bennies: {bennies}</div>
      </Typography>
    </Paper>
  );
})
