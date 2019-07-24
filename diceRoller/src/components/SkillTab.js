import React, { useState, useEffect } from 'react';
import SkillList from './SkillList.js'
import CharacterDetails from './CharacterDetails.js'
import RollingList from './RollingList.js'
import { Grid, withStyles } from '@material-ui/core';

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

export default withStyles(styles)(({classes, rollMethods, botchActive, character}) => { 
  const [characterInfo, setCharacterInfo] = useState([]);
  const [rollQueue, setRollQueue] = useState([]);
  const [skills, setSkills] = useState([]);

  // Ah, I bet I can't make the call to the DB if I don't know the character ID... and I haven't made any character calls yet.  Right?  
    // Well, sorta.  I make a call to /characters/1 for axel prose, but when navigating directly there, I make a call to /characters/axel-prose.  
    // So, if I could change the DB structure to accept axel-prose as the location, cool.  Otherwise... do I need to make a call to load characters?  
    // Conditionally call the /characters endpoint if props.character is undefined?  IT seems like things are initially undefined, but then eventually catch up.  
  useEffect(() => {
    fetch(`http://localhost:3002/characters/${character.id}`)
      .then(res => res.json())
      .then(characterInfo => (setSkills(characterInfo.skills), setCharacterInfo(characterInfo))
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


  // So, based on whether the characterInfo array is empty, I can display content.  
  // I'll need to create buttons for selecting a character and based on the character selected, tie that to the useEffect I call to fetch character info.  
  // Then I'll save the fetched characterInfo, which will update my state, which will cause the normal components to load.  
  // Unless something with routes makes more sense?  
  // I suppose it would allow me to update the path to /skill-rolling/characterName.  
  // And that would be a pattern I can continue to follow for advancement/characterName.  Further, once that state is higher up (or in Redux?) it will allow
    // me to automatically route to the correct display for specific characters (because I can create a path based on the character name).  
  return (
    <>
      {/* {console.log(availableCharacters)}
      <br />
      <br />
      <br />

      <div>{availableCharacters.map(({ id, characterName }) => 
      <li key={id}>
        {characterName}
      </li>)}  </div> */}
      {console.log(`skills: ${skills}`)}
      {console.log(`characterInfo: ${characterInfo}`)}


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
    </>
  );
})
