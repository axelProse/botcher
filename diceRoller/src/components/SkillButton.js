import React from 'react';
import { Button, Card, Grid, Typography } from '@material-ui/core'

export const SkillButton = ({skill, addToRollQueue}) => {

    const styles ={
      Card: {
        padding: 20, 
        margin: 5,
      },
    }
    
  return(
    <Card style={styles.Card}>
      <Grid container justify="space-between">
      <div>
        <Typography 
        variant="h5" 
      > 
        {skill.name}  
        
      </Typography>
      <Typography variant="subtitle1">
        <div>Die type: {skill.dieType}</div>
        <div>Description: {skill.description}</div>
      </Typography>
      </div>


      <Button 
          variant="contained" 
          color="primary" 
          
          onClick={() => addToRollQueue(skill)}>
        Roll {skill.name}
      </Button>
      </Grid> 
    </Card>
  );
}
