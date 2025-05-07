// main.js

import { getCharacters } from "./fetchData.js";

async function showCharacters() {
  const characters = await getCharacters();
  console.log(characters); // Basic output
}

showCharacters();
