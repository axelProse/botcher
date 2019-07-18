import React from 'react';
import { Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  paper: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(5),
    overflowY: 'auto',
    //height: 'calc(25% - 40px)',
    // minHeight: 200,
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
      <Typography variant="h4">
        Name: {characterName}
      </Typography>
      <Typography variant="h5">
        <div>Wounds: {wounds}</div>
        <div>Rank: {rank}</div>
        <div>Experience: {experience}</div>
        <div>Bennies: {bennies}</div>
      </Typography>
    </Paper>
  );
})
