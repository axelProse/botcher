import React, { useState, useEffect } from 'react';
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

export default withStyles(styles)(({classes, rollMethods, botchActive}) => {
  const [characterInfo, setCharacterInfo] = useState([]);
  const [rollQueue, setRollQueue] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/skills')
      .then(res => res.json())
      .then(skills => setSkills(skills)
      )
  }, [])

  useEffect(() => {
    fetch('http://localhost:3002/characters/1')
      .then(res => res.json())
      .then(characterInfo => setCharacterInfo(characterInfo)
      )
  }, [])

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
            skills={skills} 
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
    </Grid>
  );
})
