import React from 'react'
import { RollQueueSkill } from './RollQueueSkill.js'
import { Button, Paper, Typography } from '@material-ui/core'

export const RollingList = ({rollQueue, rollQueueMethods, rollMethods, wildDie, botchActive}) => {

  const style={
    Paper: {
      padding: 20,
      marginTop: 5,
      height: 500,
      overflowY: 'auto',
    }
  }

  const multiActionPenalty = (rollQueue.length - 1) * 2;

  return (
    <Paper style={style.Paper}>
      <Typography variant="h4">
        Roll Queue
      </Typography>
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
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => rollQueueMethods.clearRollQueue(rollQueue)}
            >
                Clear all skills from queue
            </Button>
          </>
        : null
      }
    </Paper>
  );
}
