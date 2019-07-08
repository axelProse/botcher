import React from 'react'
import { RollQueueSkill } from './RollQueueSkill.js'
import { Button, Paper, Typography } from '@material-ui/core'

export const RollingList = props => {

  const style={
    Paper: {
      padding: 20,
    }
  }

  // Basically, this will display all of the elements in a "to-be-rolled" array.  
    // Once all skills have been added to the queue, you may roll them in order (this is for MAP).  
    // Add a maximum number of skills that can be added
    // Add error display / explanation when trying to add greater than maximum skills.  
    // These elements should have a clear button as well, to remove a skill before it's rolled.  

    return (
    <Paper style={style.Paper}>
    <>
    <br />
    <Typography variant="h5"> Here are the skills you're ready to roll!</Typography>
  {props.rollQueue.map(skill => (
      <RollQueueSkill 
        key={skill.name} // I don't want to use this as a key because you can roll a skill >once.  But can't use index, because it isn't stable.  
        skill={skill}
        onClick={props.onClick}
        wildDie={props.wildDie}
      /> 
    )) } 
  </>
  <br />
      <Button variant="contained" color="primary" onClick={() => props.clearRollQueue(props.rollQueue)}>Clear all skills from queue</Button>
  </Paper>
  );
  }
