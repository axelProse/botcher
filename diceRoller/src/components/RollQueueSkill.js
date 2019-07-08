import React, {useState} from 'react'
import { Button, Card } from '@material-ui/core'

export const RollQueueSkill = props => {

  const [rolledResult, setRolledResult] = useState(`Roll d${props.skill.dieType}`);

  // If you've already rolled, I would like the button to become inactive unless you spend a benny to reroll it.  
  const rollIt = () => {
    let result = props.onClick(props.wildDie, props.skill.dieType);
    setRolledResult(result);
  } 

  const styles ={
    Card: {
      padding: 20, 
      marginTop: 5,
      marginBottom: 5,
    }
  }

  return (
  <Card style={styles.Card}>
      <h3>{props.skill.name}</h3>
      <div>
        <Button variant="contained" color="secondary" onClick={() => rollIt(props.wildDie, props.skill.dieType)} >
          {rolledResult}
        </Button>
      </div>
    </Card>
  );
  }
