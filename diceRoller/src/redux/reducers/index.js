import { combineReducers } from "redux";
import characters from "./characterReducer";
import currentCharacter from "./selectCharacterReducer"

const rootReducer = combineReducers({
  currentCharacter,
  characters,
});

export default rootReducer;
