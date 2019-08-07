import * as types from "../actions/actionTypes"
import initialState from "./initialState"

export default function characterReducer(state = initialState.characters, action) {
  switch (action.type) {
    case types.CREATE_CHARACTER:
      return [...state, { ...action.character }];
    case types.LOAD_CHARACTERS_SUCCESS:
      console.log("In load characters reducer")
      console.log(state)
      console.log(typeof action.characters)
      return action.characters;
    default:
      return state;
  }
}
