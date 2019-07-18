import React, {useState} from 'react';
import {baseSkills} from '../services/skills.js'
import SkillList from './SkillList.js'
import CharacterDetails from './CharacterDetails.js'
import RollingList from './RollingList.js'
import {Grid, withStyles} from '@material-ui/core';

const styles = theme => ({
  pageStyle: {
    height: 'calc(100% - 24px)'
  },
  characterDetails: {
    flex: 1
  },
  rollers: {
    flex: 1,
  }
})

export default withStyles(styles)(({classes, rollMethods, botchActive, characterInfo}) => {
  const [rollQueue, setRollQueue] = useState([]);

  const rollQueueMethods = {

      addToRollQueue(skillName) {
        console.log(skillName);
        setRollQueue(rollQueue.concat(skillName));
        console.log(rollQueue);
      },
  
      clearRollQueue(rollQueue) {
        setRollQueue([]);
        console.log(rollQueue);
      }, 
  
      removeFromRollQueue(skillName) {
        console.log(`Remove ${skillName}!`);
        let remainingSkills = rollQueue.filter(skill => skill.name !== skillName);
        setRollQueue(remainingSkills);
      },
  
    }

  const { wildDie } = characterInfo;

  return (
    <Grid container 
      className={classes.pageStyle}
      direction="column"
    >
      <CharacterDetails 
        className={classes.characterDetails}
        characterInfo={characterInfo}
      />
      <Grid container className={classes.rollers}>
        <Grid item sm>
          <SkillList 
            skills={baseSkills} 
            addToRollQueue={rollQueueMethods.addToRollQueue}
          />
        </Grid>
        <Grid item sm>
          <RollingList 
            rollQueue={rollQueue}
            rollQueueMethods={rollQueueMethods}
            rollMethods={rollMethods}
            wildDie={wildDie} // This feels like it should be global and that I don't need to pass it down... 
            botchActive={botchActive}
          /> 
        </Grid>
      </Grid>
      {/* Can I spread the character details in here instead? */}
    </Grid>
  );
})

// Once I start implementing a character creator tab, I will put that in a second component.  
// Then I can apparently use react-router to hook these tabs to links in the NavBar component, which then allows me to switch which view displays.  

