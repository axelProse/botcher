import React from 'react';
import { Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  paper: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(1),
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
      parry,
      toughness
    } = characterInfo;  // Using this pattern, I can really make my calls at the top level, then easily pass specific info and destructure it.  

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4">
        Name: {characterName}
      </Typography>
      <Typography variant="h5">
        <div>Toughness: {toughness}</div>
        <div>Parry: {parry}</div>
        <div>Wounds: {wounds}</div>
        <div>Rank: {rank}</div>
        <div>Experience: {experience}</div>
        <div>Bennies: {bennies}</div>
      </Typography>
    </Paper>
  );
})
