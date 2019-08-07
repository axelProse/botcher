import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import { Link, Route, Switch } from 'react-router-dom'
import SkillTab from './SkillTab'
import * as characterActions from '../redux/actions/characterActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as currentCharacterActions from '../redux/actions/currentCharacterActions';

// I may need to turn this into a proper container that has state and doesn't render anything; the SkillTab will then become a child component
// (and the parent-level rendered component).  Watch some more videos to see if that's the case and then implement.  

function SkillRollerContainer(props) {

  useEffect(() => {
    props.loadCharacters()
  }, [])

  return (

    // Replace your switch with conditional UI.  
    // It can be based on whether we have state for a selected character.  

    // ... which means first, create your actions for setting selected character when you click a button

    <Switch>
      {console.log(props.selectedCharacter)}
      <Route path={`${props.match.url}/:id`} render={({ match }) => {

        const chosenCharacter = props.characters.find((character) => {

          return character.characterName.replace(/\s+/g, '-').toLowerCase() === match.params.id
        })
        return <SkillTab
          character={chosenCharacter}
          rollMethods={props.rollMethods}
          botchActive={props.botchActive}
          testing={props.selectedCharacter}
        />
      }} />
      <Route path='/skill-roller/' render={() => {
        return (
          <>
            <br /><br /><br /><br /><br /><br /><br /><br />
            Please select a character

              {props.characters.map(character => (
              <Link
                key={character.id}
                to={`${props.match.path}${character.characterName.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {console.log(character)}

                <Button

                  // if this all ends up working, I would rather start sending character.id here to simplify things.
                  onClick={() => props.selectCharacter(character)}
                  // onClick={() => {
                  //   console.log(props.selectedCharacter)
                  //   console.log(character.id)
                  //   props.selectCharacter(character)
                  // }}
                  variant='contained'
                  character={character}
                >
                  {character.characterName}
                </Button>
              </Link>

            ))}

          </>)
        // }
      }} />

    </Switch>
  )
}

SkillRollerContainer.propTypes = {
  //dispatch: PropTypes.func.isRequired, // dispatch is only passed in if we don't pass in mapDispatchToProps within our connect call.
  characters: PropTypes.array.isRequired,
  loadCharacters: PropTypes.func.isRequired,
}

// You can add in ownProps as the second argument for mapStateToProps if you need to pass in rollMethods or botchActive
function mapStateToProps(state) {
  return {
    characters: state.characters,
    selectedCharacter: state.selectedCharacter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadCharacters: () => dispatch(characterActions.loadCharacters()),
    selectCharacter: (character) => dispatch(currentCharacterActions.selectCharacter(character))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillRollerContainer);
