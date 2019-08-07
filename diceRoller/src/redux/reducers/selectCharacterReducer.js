import * as types from "../actions/actionTypes"
import initialState from "./initialState"

export default function selectCharacterReducer(state = initialState.selectedCharacter, action) {
  // debugger
  console.log("in the reducer")
  console.log(action.character)
  if (action.character !== undefined) {
    console.log(action.character.id)
  }
  switch (action.type) {
    case types.SELECT_CHARACTER:
      console.log("about to set character ID")
      console.log(action.character.id)
      return action.character.id;
    default:
      return state;
  }
}