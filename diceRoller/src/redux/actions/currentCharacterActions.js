import * as types from "./actionTypes"

export function selectCharacter(character) {
  return { type: types.SELECT_CHARACTER, character }
}
