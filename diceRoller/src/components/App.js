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
  const botchActive = true; // I would like to make this a setting rule, but wanted to add it into the skill rolling immediately.  Change scope later.  

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

  const removeFromRollQueue = (skillName) => {
    console.log(`Remove ${skillName}!`);
    let remainingSkills = rollQueue.filter(skill => skill.name !== skillName);
    setRollQueue(remainingSkills);
  }

  const roll = (wildDie, dieType, multiActionPenalty, botchActive) => {
    let wildResult = rollExploding(wildDie);
    let traitResult = rollExploding(dieType);
    console.log(`Wild: ${wildResult} Trait: ${traitResult}`)    
    let botch = botchCheck(wildResult, traitResult, botchActive);

    let rollResults = [wildResult, traitResult];
    let multiActionPenaltyResults = handleMultiActionPenalty(rollResults, multiActionPenalty);
    console.log(multiActionPenaltyResults);
    console.log(`Highest value: ${Math.max(...multiActionPenaltyResults)}`);

    if (botch) {
      console.log('Exiting, because you botched!')
      return 'Botch!';
    } else 
      return Math.max(...multiActionPenaltyResults);
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

  const botchCheck = (wildResult, traitResult, botchActive) => {
    if (!botchActive) {
      console.log('Botch rule is not active');
      return false;
    } else if (wildResult == 1 && traitResult == 1) {
      return true;
    } else 
      return false;
  }

  const handleMultiActionPenalty = (rollResults, multiActionPenalty) => {
    console.log(rollResults);
    console.log(multiActionPenalty);
    const updatedResults = rollResults.map(result => result > multiActionPenalty ? (result - multiActionPenalty) : 1); 
    return updatedResults;
  }
    
    // Seems like we want to handle MAP math first, then determine results.  
    // I could decrease the amount of each value in the array by 2 (using map) and could even keep it from returning 0.  
    // Then I return the higher value.  

    // if (botch) {
    //   console.log('Exiting, because you botched!')
    //   return 'Botch!';
    // } else if (wildResult > traitResult)
    //   {console.log('Wild was greater!');
    //   console.log(`MAP: ${multiActionPenalty}`);
    //   return wildResult;
    // }
    // else if (wildResult < traitResult)
    //   {console.log('Trait was greater!');
    //   console.log(`MAP: ${multiActionPenalty}`);
    //   return traitResult;
    // }
    // else if (wildResult === traitResult) 
    //   {console.log('Tie!')
    //   console.log(`MAP: ${multiActionPenalty}`);
    //   return wildResult;
    // }
    // // I'd like to return an array at some point, but right now whatevs.  
    // // let rollResults = [wildResult, traitResult]
    // //return rollResults;
    //   }

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
        removeFromRollQueue={removeFromRollQueue}
        botchActive={botchActive}
      /> 

      {/* <CharacterDetails {...useCharacterInfo} /> */}
      <SkillList skills={baseSkills} 
       addToRollQueue={addToRollQueue}
      />
    </div>
  );
}
