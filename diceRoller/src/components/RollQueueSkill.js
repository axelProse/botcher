import React, {useState} from 'react'
import { Button, Card, Grid, Typography } from '@material-ui/core'

export const RollQueueSkill = props => {

  const [rolledResult, setRolledResult] = useState(`Roll d${props.skill.dieType}`);

  const rollIt = () => {
    let result = props.onClick(props.wildDie, props.skill.dieType, props.multiActionPenalty, props.botchActive);
    setRolledResult(result);
  } 

  const style ={
    Card: {
      padding: 20, 
      marginTop: 5,
      marginBottom: 5,
    },
    Button: {
      padding: 5,
    }
  }

  return (
  <Card style={style.Card}>
      <Grid container alignItems="center" justify="space-between" direction="row">
      <Button variant="contained" color="secondary" style={style.Button} onClick={() => rollIt(props.wildDie, props.skill.dieType, props.multiActionPenalty, props.botchActive)} >
        {rolledResult}
      </Button>
      <Typography variant="h5">
          {props.skill.name}
        </Typography>

        
      <Button variant="outlined" color="secondary" style={style.Button} onClick={() => props.removeFromRollQueue(props.skill.name) } >x</Button>
      </Grid>
    </Card>
  );
  }
