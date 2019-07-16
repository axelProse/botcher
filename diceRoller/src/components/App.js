import React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import {Paper} from "@material-ui/core"
import {useCharacterInfo} from './CharacterInfo.js'
import NavBar from './NavBar.js'
import {SkillTab} from './SkillTab.js'

export const App = (props) => {
  const botchActive = true; // I would like to make this a setting rule, but wanted to add it into the skill rolling immediately.  Change scope later.  
  
  const rollMethods = {

    roll(wildDie, dieType, multiActionPenalty, botchActive) {
      let wildResult = rollMethods.rollExploding(wildDie);
      let traitResult = rollMethods.rollExploding(dieType);
      console.log(`Wild: ${wildResult} Trait: ${traitResult}`)    
      let botch = rollMethods.botchCheck(wildResult, traitResult, botchActive);
  
      let rollResults = [wildResult, traitResult];
      let multiActionPenaltyResults = rollMethods.handleMultiActionPenalty(rollResults, multiActionPenalty);
      console.log(multiActionPenaltyResults);
      console.log(`Highest value: ${Math.max(...multiActionPenaltyResults)}`);
  
      if (botch) {
        console.log('Exiting, because you botched!')
        return 'Botch!';
      } else 
        return Math.max(...multiActionPenaltyResults);
    },

    rollExploding(dieValue, total = 0) {
      let rollResult = Math.ceil(Math.random()*dieValue)
      console.log(`Result: ${rollResult} Die value: ${dieValue}`)
      total = total + rollResult;
      if (rollResult === dieValue) {
        console.log('Explode!');
        return rollMethods.rollExploding(dieValue, total);}
      else (rollResult < dieValue) 
          console.log('No explosions!');
  
          return total;
    },
  
    botchCheck(wildResult, traitResult, botchActive) {
      if (!botchActive) {
        console.log('Botch rule is not active');
        return false;
      } else if (wildResult == 1 && traitResult == 1) {
        return true;
      } else 
        return false;
    },
  
    handleMultiActionPenalty(rollResults, multiActionPenalty) {
      console.log(rollResults);
      console.log(multiActionPenalty);
      const updatedResults = rollResults.map(result => result > multiActionPenalty ? (result - multiActionPenalty) : 1); 
      return updatedResults;
    },

  }

  return (
      <Paper>
        <NavBar />
        <SkillTab 
          rollMethods={rollMethods}
          botchActive={botchActive}
          characterInfo={useCharacterInfo()}  // This is the React component, which is ultimately weird... but that's why I need to invoke it here.  Refactor away.
        />
      </Paper>
  );
}
