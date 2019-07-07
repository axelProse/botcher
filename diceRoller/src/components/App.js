import React, {useState} from 'react'
import {baseSkills} from '../services/skills.js'
import {SkillList} from './SkillList.js'
import {useCharacterInfo} from './CharacterInfo.js'
import {CharacterDetails} from './CharacterDetails.js'
import {RollingList} from './RollingList.js'

export default function App () {
  const [rollQueue, setRollQueue] = useState([]);
    // Instead of having it at a global level, I should let each skill have a result value.  
    // Probably best to add the property specifically for skills in the rollQueue.  
    // It starts as 0 (or unrolled?), and then the roll method updates the skill's result value.  
      // But you can't update props.  Which makes sense, I want things dumb.  
      // I could have the data inside of skills... except I can't.  What if you roll a skill more than once?  
      // Can I just have a property on the roll queue skill that knows what was just rolled?  
      // Maybe I have state on the the roll queue skill, and the roll function updates that state?  
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
      <br /><br />
      Here is a button that will track how many times you click it:
      <br /><br />
      <button onClick={() => setCount(count+1)}>
        {count}
      </button>
    </div>
  );
}
