import React from 'react';
import { Button, Card, Typography } from '@material-ui/core'

export const SkillButton = ({skill, addToRollQueue}) => {

    const styles ={
      Card: {
        padding: 20, 
        margin: 5,
      }
    }
    
  return(
    <Card style={styles.Card}>
      <Typography 
        variant="h5" 
        //align="center"
      > 
        {skill.name}
      </Typography>
      <Button variant="outlined" color="primary" onClick={() => addToRollQueue(skill)}>
        Roll {skill.name}
      </Button>
      <Typography variant="subtitle1">
        <div>Die type: {skill.dieType}</div>
        <div>Description: {skill.description}</div>
      </Typography>
    </Card>
  );
}
