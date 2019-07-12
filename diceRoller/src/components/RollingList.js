import React from 'react'
import { RollQueueSkill } from './RollQueueSkill.js'
import { Button, Grid, Paper, Typography } from '@material-ui/core'

export const RollingList = ({rollQueue, rollQueueMethods, rollMethods, wildDie, botchActive}) => {

  const style={
    Paper: {
      padding: 20,
      marginTop: 5,
      marginLeft: 5,
      height: 500,
      overflowY: 'auto',
      background: 'darkslategrey',
      border: '4px',
      borderColor: 'red'
    }, 
    gridContainer: {
      flexdirection: 'row',
      justify: 'space-between'

    },
    gridItem: {
      flex: 1,
      color: 'white',
    },
    button: {
      flex: 1,
      background: 'crimson',
      //alignself: 'flex-end'
    }

  }

  const multiActionPenalty = (rollQueue.length - 1) * 2;

  return (
    <Paper style={style.Paper}>
      <Grid container style={style.gridContainer}> 
        <Typography variant="h4" style={style.gridItem}>
          Roll Queue  
        </Typography>
        {rollQueue.length === 0
          ? null
          : <Button 
              variant="contained" 
              color="primary" 
              style={style.button}
              onClick={() => rollQueueMethods.clearRollQueue(rollQueue)}
            >
              Clear all skills
            </Button>  
        }
      </Grid>

      {rollQueue.length !== 0
        ? <> 
            {multiActionPenalty > 0
            ? <Typography variant="h5" color="secondary">
              Current penalty to every roll: {multiActionPenalty}
              </Typography>
            : null
            }

            {rollQueue.map(skill => (
              <RollQueueSkill 
                key={skill.name} // I don't want to use this as a key because you can roll a skill >once.  But can't use index, because it isn't stable.  
                skill={skill}
                onClick={rollMethods.roll}
                removeFromRollQueue={rollQueueMethods.removeFromRollQueue}
                wildDie={wildDie}
                multiActionPenalty={multiActionPenalty}
                botchActive={botchActive}
              /> 
            )) } 
          </>
        : null
      }
    </Paper>
  );
}
