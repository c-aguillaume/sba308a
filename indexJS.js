// Class for Harry Potter Character
class HarryPotterCharacters {
  constructor(name, gender, eye_color, image, wand, wiki_link) {
    this.name = name; // Character's name
    this.gender = gender; // Gender of the character
    this.eye_color = eye_color; // Eye color of the character
    this.image = image; // Image URL of the character
    this.wand = wand; // Wand description of the character
    this.wiki_link = wiki_link; // Wiki link for the character
  }
}

// Create a function to initially get all of the data and objects to see what I am working with
async function initialLoad() {
  try {
    const response = await fetch("https://api.potterdb.com/v1/characters");

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const allChar = await response.json();

    // Log the fetched data to see the structure
    console.log(allChar);

    // Iterate through the character data and create character instances
    allChar.data.forEach((element) => {
      let characterData = new HarryPotterCharacters(
        element.attributes.name,
        element.attributes.gender,
        element.attributes.eye_color,
        element.attributes.image,
        element.attributes.wands,
        element.attributes.wiki
      );

      // Log the created character data object
      console.log(characterData);
    });
  } catch (error) {
    console.log(error);
  }
}

initialLoad(); // Call the function to load data
