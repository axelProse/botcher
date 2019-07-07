import React, {useState} from 'react'

export const RollQueueSkill = props => {

  const [rolledResult, setRolledResult] = useState('Not yet rolled');

  const rollIt = () => {
    let result = props.onClick(props.wildDie, props.skill.dieType);
    setRolledResult(result);
  } 

  return (
  <div>
      <h4>{props.skill.name}</h4>
      <div>
        <button onClick={() => rollIt(props.wildDie, props.skill.dieType)} >
          {props.skill.dieType} 
        </button>
          Result={rolledResult}
      </div>
    </div>
  );
  }
