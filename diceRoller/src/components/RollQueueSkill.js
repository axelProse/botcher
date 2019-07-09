import React, {useState} from 'react'
import { Button, Card, Typography } from '@material-ui/core'

export const RollQueueSkill = props => {

  const [rolledResult, setRolledResult] = useState(`Roll d${props.skill.dieType}`);

  const rollIt = () => {
    let result = props.onClick(props.wildDie, props.skill.dieType, props.multiActionPenalty, props.botchActive);
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
    <Button variant="outlined" color="secondary" onClick={() => props.removeFromRollQueue(props.skill.name) } >x</Button>
    <Typography variant="h5">
      {props.skill.name}
    </Typography>
      <div>
        <Button variant="contained" color="secondary" onClick={() => rollIt(props.wildDie, props.skill.dieType, props.multiActionPenalty, props.botchActive)} >
          {rolledResult}
        </Button>
      </div>
    </Card>
  );
  }
