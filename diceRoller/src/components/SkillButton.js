import React from 'react';
//import { Button, Container } from '../../node_modules/@material-ui/core'
import { Button, Card, Typography } from '@material-ui/core'

export const SkillButton = props => {


  // Display _something_ if the dieType is null.  
  // I'd like to display a row of cells that contain the possible die types; might need a component for that which can be enabled / disabled
  // Title case the names.  
  // Only display the description and associatedAttribute onHover()
    // To do this, I think I need to pass the function down from skill list as a prop

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
        {props.skill.name}
      </Typography>
      <Button variant="outlined" color="primary" onClick={() => props.addToRollQueue(props.skill)}>
        Roll {props.skill.name}
      </Button>
      <Typography variant="subtitle1">
        <div>Die type: {props.skill.dieType}</div>
        <div>Description: {props.skill.description}</div>
      </Typography>
    </Card>
  );
}
