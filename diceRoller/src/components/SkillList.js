import React from 'react';
import {SkillButton} from './SkillButton.js'
import { Grid } from '@material-ui/core'

export const SkillList = props => {

  const style={
    Grid: {
      padding: 20,
    }
  }
  // Allow a show/hide option based on whether the skills are known (which means dieType !== null;)
  return (
    <Grid container justify="flex-start" spacing={2} style={style.Grid}>
      {props.skills.map(skill => (
        <Grid key={skill.name} item>
          <SkillButton 
            skill={skill}
            addToRollQueue={props.addToRollQueue}
          />
        </Grid>
        )) } 
    </Grid>
  );
}
