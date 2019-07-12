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
      background: 'lightblue'
    },
    Button: {
      padding: 5,
      background: 'orange',
      color: 'black',
    },
    closeButton: {
      padding: 5,
      background: 'crimson',
      color: 'white',
    },
    Typography: {
      color: 'darkslategrey'
    }
  }

  return (
  <Card style={style.Card}>
      <Grid container alignItems="center" justify="space-between" direction="row">
      <Button variant="contained" style={style.Button} onClick={() => rollIt(props.wildDie, props.skill.dieType, props.multiActionPenalty, props.botchActive)} >
        {rolledResult}
      </Button>
      <Typography variant="h5" style={style.Typography}>
          {props.skill.name}
        </Typography>

        
      <Button variant="outlined" color="secondary" style={style.closeButton} onClick={() => props.removeFromRollQueue(props.skill.name) } >x</Button>
      </Grid>
    </Card>
  );
  }
