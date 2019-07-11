import React from 'react';
import { Paper, Typography } from '@material-ui/core'

export const CharacterDetails = ({characterInfo}) => {
  
    const {
      characterName,
      wounds, 
      rank,
      experience,
      bennies,
    } = characterInfo;

    const style={
      Paper: {
        padding: 20,
        marginTop: 5,
        height: 200,
        overflowY: 'auto',
      }
    }

  return (
    <Paper style={style.Paper}>
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
}
