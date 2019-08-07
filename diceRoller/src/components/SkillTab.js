import React, { useState } from 'react';
import SkillList from './SkillList.js'
import CharacterDetails from './CharacterDetails.js'
import RollingList from './RollingList.js'
import { Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types'

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

function SkillTab({ classes, rollMethods, botchActive, character, character: { wildDie }, testing }) {
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



  // So, based on whether the characterInfo array is empty, I can display content.  
  // I'll need to create buttons for selecting a character and based on the character selected, tie that to the useEffect I call to fetch character info.  
  // Then I'll save the fetched characterInfo, which will update my state, which will cause the normal components to load.  
  // Unless something with routes makes more sense?  
  // I suppose it would allow me to update the path to /skill-rolling/characterName.  
  // And that would be a pattern I can continue to follow for advancement/characterName.  Further, once that state is higher up (or in Redux?) it will allow
  // me to automatically route to the correct display for specific characters (because I can create a path based on the character name).  
  return (
    <>
      {console.log(testing)}
      {console.log(character.skills)}
      {console.log(`character: ${character}`)}

      <Grid container
        className={classes.pageStyle}
        direction="column"
      >
        <CharacterDetails
          className={classes.characterDetails}
          characterInfo={character}
        />
        <Grid container className={classes.rollers}>
          <Grid item sm>
            <SkillList
              skills={character.skills}
              addToRollQueue={rollQueueMethods.addToRollQueue}
            />
          </Grid>
          <Grid item sm>
            <RollingList
              rollQueue={rollQueue}
              rollQueueMethods={rollQueueMethods}
              rollMethods={rollMethods}
              wildDie={wildDie} // This feels like it should be global and that I don't need to pass it down... 
              botchActive={botchActive} // This too.  Maybe pull from store in container component?  
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

SkillTab.propTypes = {
  character: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  rollMethods: PropTypes.object.isRequired,
  botchActive: PropTypes.bool.isRequired,
  wildDie: PropTypes.number,
}

export default withStyles(styles)(SkillTab);

