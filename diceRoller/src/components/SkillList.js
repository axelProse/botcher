import React from 'react';
import {SkillButton} from './SkillButton.js'

export const SkillList = props => (
  // Allow a show/hide option based on whether the skills are known (which means dieType !== null;)
  <>
    {props.skills.map(skill => (
      <SkillButton 
        key={skill.name} 
        skill={skill}
        addToRollQueue={props.addToRollQueue}
      /> 
    )) } 
  </>
)
