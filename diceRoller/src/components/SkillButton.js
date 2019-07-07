import React from 'react';

export const SkillButton = props => (

  // Display _something_ if the dieType is null.  
  // I'd like to display a row of cells that contain the possible die types; might need a component for that which can be enabled / disabled
  // Title case the names.  
  // Find a meaningful wrap around the entire component so they look like discrete components.  
  // Only display the description and associatedAttribute onHover()
    // To do this, I think I need to pass the function down from skill list as a prop

    <div>
      <h3>{props.skill.name}</h3>
      <button onClick={() => props.addToRollQueue(props.skill)}>
        Add {props.skill.name} to queue
      </button>
      <div>Die type: {props.skill.dieType}</div>
      <div>Description: {props.skill.description}</div>
    </div>
);
