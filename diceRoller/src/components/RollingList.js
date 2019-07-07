import React from 'react'
import {RollQueueSkill} from './RollQueueSkill.js'

export const RollingList = props => (

  // Basically, this will display all of the elements in a "to-be-rolled" array.  
    // Once all skills have been added to the queue, you may roll them in order (this is for MAP).  
    // Add a maximum number of skills that can be added
    // Add error display / explanation when trying to add greater than maximum skills.  
  // There should be a clear button that removes all elements from the array to purge this element after rolling.  
    // The result will display in a window here, rather than allowing rolls in the skill list.  
    // These elements should have a clear button as well, to remove a skill before it's rolled.  

    <div>Here are the skills you're ready to roll!
      <br /><br />
      <button onClick={() => props.clearRollQueue(props.rollQueue)}>Clear all skills from queue</button>
    <>
  {props.rollQueue.map(skill => (
      <RollQueueSkill 
        key={skill.name} // Instead of this as a key, can I do the index of the rollQueue?
        skill={skill}
        onClick={props.onClick}
        wildDie={props.wildDie}
      /> 
    )) } 
  </>
  </div>
  

);
