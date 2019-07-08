import React, {useState} from 'react'
import {baseSkills} from '../services/skills.js'
import {SkillList} from './SkillList.js'
import {useCharacterInfo} from './CharacterInfo.js'
import {CharacterDetails} from './CharacterDetails.js'
import {RollingList} from './RollingList.js'

export default function App () {
  const [rollQueue, setRollQueue] = useState([]);
  const [count, setCount] = useState(0);
    //const CharacterInfo = useCharacterInfo

  const {
    characterName,
    wounds, 
    wildDie,
    rank,
    experience,
    bennies,
    pace,
    toughness,
    parry,
  } = useCharacterInfo();
  // return { wounds, wildDie, rank, experience, bennies, pace, toughness, parry };
  // But whatever, I can always move it if I don't want it here.  
    // That said, if I want to create a component to display these things, it's a pain if they aren't wrapped up together. 
    // In the guide he ended up abstracting out state management to another object; does it make sense to abstract out all
      // of the character state out to that object?  Less a component, it's where we keep all the character state.  
      // Similarly, we could have state management for the global stuff once I get to that point.   
  //skills = baseSkills;

  const addToRollQueue = (skillName) => {
    console.log(skillName);
    setRollQueue(rollQueue.concat(skillName));
    console.log(rollQueue);
  }

  const clearRollQueue = (rollQueue) => {
    setRollQueue([]);
    console.log(rollQueue);
  }

  // const clearSkillFromQueue = (rollQueue) => {
  //   // This should be a filter function that removes the skill from the array... based on index?  How do I avoid name?  
  // }

  const roll = (wildDie, dieType) => {
    let wildResult = rollExploding(wildDie);
    let traitResult = rollExploding(dieType);
    console.log(`Wild: ${wildResult} Trait: ${traitResult}`)
    if (wildResult > traitResult)
      {console.log('Wild was greater!');
      return wildResult;
    }
    else if (wildResult < traitResult)
      {console.log('Trait was greater!');
      return traitResult;
    }
    else if (wildResult === traitResult) 
      {console.log('Tie!')
      return wildResult;
    }
    else 
      console.log('What happened?')
    // I'd like to return an array at some point, but right now whatevs.  
    // let rollResults = [wildResult, traitResult]
    //return rollResults;
      }

    const rollExploding = (dieValue, total = 0) => {
      let rollResult = Math.ceil(Math.random()*dieValue)
      console.log(`Result: ${rollResult} Die value: ${dieValue}`)
      total = total + rollResult;
      if (rollResult === dieValue) {
        console.log('Explode!');
        return rollExploding(dieValue, total);}
      else (rollResult < dieValue) 
          console.log('No explosions!');
          return total;
    }

  return (
    <div>
      {/* Can I spread the character details in here instead? */}
      <CharacterDetails 
        characterName={characterName}
        wounds={wounds}
        wildDie={wildDie}
        rank={rank}
        experience={experience}
        bennies={bennies}
        pace={pace}
        toughness={toughness}
        parry={parry}
      />
      <RollingList 
        rollQueue={rollQueue}
        onClick={roll}
        wildDie={wildDie} // This feels like it should be global and that I don't need to pass it down... 
        clearRollQueue={clearRollQueue}
        /> 

      {/* <CharacterDetails {...useCharacterInfo} /> */}
      <SkillList skills={baseSkills} 
       addToRollQueue={addToRollQueue}
      />
    </div>
  );
}
