import React from 'react';
import {SkillButton} from './SkillButton.js'
import { Grid, Paper } from '@material-ui/core'

export const SkillList = ({skills, addToRollQueue}) => {
//export const SkillList = props => {
  const style={
    Grid: {
      padding: 0, // Intentional, will style later.
    },
    Paper: {
      padding: 20,
      marginTop: 5,
      height: 500,
      overflowY: 'auto',
      background: 'darkslategrey'
    }
  }
  
  return (
    <Paper style={style.Paper}>
      <Grid container 
      direction="column"
      alignItems="stretch"
      //justify="space-evenly" 
      spacing={1} 
      style={style.Grid}>
        {skills.map(skill => (
          <Grid key={skill.name} item>
            <SkillButton 
              skill={skill}
              addToRollQueue={addToRollQueue}
            />
          </Grid>
          )) } 
      </Grid>
    </Paper>
  );
}
