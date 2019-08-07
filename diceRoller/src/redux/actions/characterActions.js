import * as types from "./actionTypes"
import * as characterApi from "../../api/characterApi"

export function createCharacter(character) {
  return { type: types.CREATE_CHARACTER, character }
}

export function loadCharactersSuccess(characters) {
  console.log(characters)
  return { type: types.LOAD_CHARACTERS_SUCCESS, characters }
}

export function loadCharacters() {
  return function (dispatch) {
    return characterApi.getCharacters()
      .then(characters => {
        const characterObjs = Object.values(characters.byId)
        const playableCharacters = characterObjs.filter((character) => {
          return character.playReady === true
        })
        return playableCharacters
      })
      .then(characters => {
        dispatch(loadCharactersSuccess(characters))
      })
  }
}
