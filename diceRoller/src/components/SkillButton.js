import React from 'react';
import { Button, Card, Grid, Typography } from '@material-ui/core'

export const SkillButton = ({skill, addToRollQueue}) => {

    const style ={
      Card: {
        padding: 20, 
        margin: 5,
        background: 'lightblue'
      },
      Button: {
        background: 'teal',
      },
      Typography: {
        color: 'darkslategrey',
      }
    }
    
  return(
    <Card style={style.Card}>
      <Grid container justify="space-between">
      <div>
        <Typography style={style.Typography}
        variant="h5" 
      > 
        {skill.name}  
        
      </Typography>
      <Typography variant="subtitle1" style={style.Typography}>
        <div>Die type: {skill.dieType}</div>
        <div>Description: {skill.description}</div>
      </Typography>
      </div>


      <Button 
          variant="contained" 
          color="primary" 
          style={style.Button}
                   
          onClick={() => addToRollQueue(skill)}>
        Roll {skill.name}
      </Button>
      </Grid> 
    </Card>
  );
}
