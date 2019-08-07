import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar.js'
import Home from './Home'
import CharacterCreatorTab from './CharacterCreatorTab'
import AdvancementTab from './AdvancementTab'
import SkillRollerContainer from './SkillRollerContainer.js';

export default () => {
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
      let rollResult = Math.ceil(Math.random() * dieValue)
      console.log(`Result: ${rollResult} Die value: ${dieValue}`)
      total = total + rollResult;
      if (rollResult === dieValue) {
        console.log('Explode!');
        return rollMethods.rollExploding(dieValue, total);
      }
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
    <>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/character-creator' component={CharacterCreatorTab} />
        <Route path='/skill-roller/' render={
          props => <SkillRollerContainer {...props}
            rollMethods={rollMethods}
            botchActive={botchActive} />} />
        <Route path='/advancement' component={AdvancementTab} />
      </Switch>
    </>
  );
}
