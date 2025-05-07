// fetchData.js

export async function getCharacters() {
  try {
    const res = await fetch("https://api.potterdb.com/v1/characters");
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log("Fetch error:", error);
    return [];
  }
}
