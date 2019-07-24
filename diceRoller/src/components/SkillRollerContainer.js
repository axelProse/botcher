import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import { Link, Route, Switch } from 'react-router-dom'
import SkillTab from './SkillTab'
//import SelectCharacter from './SelectCharacter'

export default ( props ) => {
  const [availableCharacters, setAvailableCharacters] = useState([]);
  //console.log(`availableCharacters: ${availableCharacters}`);

  // useEffect(() => {
  //   const fetchPlayableCharacters = async () => {
  //   const playableCharacters = await fetch('http://localhost:3002/characters')
  //     .then(res => res.json())
  //     .then(characters => {
  //       characters.filter((character) => { 
  //         console.log(character);
  //         return character.playReady === true })
  //     });
  //     console.log(`availableCharacters: ${availableCharacters}`);
  //     setAvailableCharacters(playableCharacters);
  //   };
  //   fetchPlayableCharacters();
  // }, [])

  useEffect(() => {
    fetch('http://localhost:3002/characters')
      .then(res => res.json())
      .then(characters => {
        console.log(characters)
        const playableCharacters = characters.filter((character) => { 
          return character.playReady === true })
        setAvailableCharacters(playableCharacters)
      })
  }, [])

return(
  <Switch>
    <Route path={`${props.match.url}/:id`} render={({ match }) => { 
      const selectedCharacter = availableCharacters.find((character) => {
          return character.characterName.replace(/\s+/g, '-').toLowerCase() === match.params.id})
        return <SkillTab 
          character={selectedCharacter} 
          rollMethods={props.rollMethods}
          botchActive={props.botchActive}  
        /> 
    }} />
    <Route path='/skill-roller/' render={() => {
      return (
        <> 
        
          <br /><br /><br /><br /><br /><br /><br /><br />
            Please select a character        

        {/* Transform the characterName to utilize - (axel-prose) */}
        {availableCharacters.map(character => (
          //const tidyName = character.characterName.replace(/\s+/g, '-').toLowerCase()
          //tidyName = tidyName.replace(/\s+/g, '-').toLowerCase();
          <Link 
            key={character.id} 
            to={`${props.match.path}${character.characterName.replace(/\s+/g, '-').toLowerCase()}`}
          >
          <Button 
            variant = 'contained' 
            character={character}
          >
            {character.characterName}
          </Button>
        </Link>
        
        ))}
     
     </>) }} /> 
      
  </Switch>
)}
