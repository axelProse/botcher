import React from 'react';
import SkillButton from './SkillButton.js'
import { Grid, Paper, withStyles } from '@material-ui/core'

const styles = theme => ({
  paper: {
    margin: theme.spacing(1.5),
    height: 500,
    overflowY: 'auto',
  }
})

export default withStyles(styles) (({classes, skills, addToRollQueue}) => {
  return (
    <Paper className={classes.paper}>
      <Grid container 
        direction="column"
        alignItems="stretch"
      >
        {skills.map(skill => (
          <Grid item 
            key={skill.name} 
          >
            <SkillButton 
              skill={skill}
              addToRollQueue={addToRollQueue}
            />
          </Grid>
        )) } 
      </Grid>
    </Paper>
  );
})
