import React, {useState} from 'react'
import { Button, Card, Grid, Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  card: {
    padding: theme.spacing(2.5), 
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  button: {
    padding: theme.spacing(2),
    background: theme.palette.primary.main,
  },
  closeButton: { // This should be an icon at some point.  
    height: 48,
    color: theme.palette.secondary.main,
  },
  skillName: {
    textTransform: 'capitalize',
  }
})

export default withStyles(styles) (({classes, skill, wildDie, multiActionPenalty, botchActive, onClick, removeFromRollQueue}) => {

  const [rolledResult, setRolledResult] = useState(`Roll d${skill.dieType}`);

  const rollIt = () => {
    let result = onClick(wildDie, skill.dieType, multiActionPenalty, botchActive);
    setRolledResult(result);
  } 

  return (
    <Card className={classes.card}>
      <Grid container 
        alignItems="center" 
        justify="space-between" 
        direction="row"
      >
        <Button 
          className={classes.button} 
          variant="contained" 
          onClick={() => rollIt(wildDie, skill.dieType, multiActionPenalty, botchActive)} 
        >
          {rolledResult}
        </Button>
        <Typography 
          className={classes.skillName}
          variant="h5" 
        >
            {skill.name}
        </Typography>

        
      <Button 
        className={classes.closeButton} 
        variant="outlined" 
        onClick={() => removeFromRollQueue(skill.name) } 
      >
        X
      </Button>
      </Grid>
    </Card>
  );
})
