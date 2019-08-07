import { handleResponse, handleError, baseUrl } from "./apiUtils";
import "core-js/stable";
import "regenerator-runtime/runtime";

export async function getCharacters() {
  const url = baseUrl + "/characters/"
  return await fetch(url)
    .then(handleResponse)
    .catch(handleError);
}
