import React from 'react'
import RollQueueSkill from './RollQueueSkill.js'
import { Button, Grid, Paper, Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  paper: {
    padding: theme.spacing(1.5),
    margin: theme.spacing(1.5),
    height: '100%',
    overflowY: 'auto',
  }, 
  gridContainer: {
    flexdirection: 'row',
    justify: 'space-between'
  },
  gridItem: {
    flex: 2,
    margin: theme.spacing(2),
  },
  button: {
    flex: 1,
    marginRight: theme.spacing(2),
  }
})

export default withStyles(styles) (({classes, rollQueue, rollQueueMethods, rollMethods, wildDie, botchActive}) => {

  const multiActionPenalty = (rollQueue.length - 1) * 2;

  return (
    <Paper className={classes.paper}>
      <Grid container className={classes.gridContainer}> 
        <Typography 
          className={classes.gridItem}
          variant="h4" 
        >
          Roll Queue  
        </Typography>
        {rollQueue.length === 0
          ? null
          : <Button 
              variant="contained" 
              color="secondary" 
              className={classes.button}
              onClick={() => rollQueueMethods.clearRollQueue(rollQueue)}
            >
              Clear all skills
            </Button>  
        }
      </Grid>

      {rollQueue.length !== 0
        ? <> 
            {multiActionPenalty > 0
            ? <Typography 
                className={classes.gridItem} 
                variant="h5" 
                color="error" 
                align="center"
              >
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
})
