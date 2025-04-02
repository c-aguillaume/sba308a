
//Create a function to initially get all of the data and objects to see what I am working with
async function initialLoad(params) {
    try {
        const response = await fetch("https://api.potterdb.com/v1/characters")
        // console.log(response)  //Check to see what response I am getting when trying to fetch data  
        if(!response.ok){
                throw new Error("Could not fetch resource");
            }
            const allChar = await response.json();
                // console.log(allChar)  //Console Log all characters 
                
    
            allChar.data.forEach(element => {
                let charaterData = new HarryPotterCharacters(element.attributes.name, element.attributes.gender, element.attributes.eye_color, element.attributes.image, element.attributes.wands, element.attributes.wiki)
                console.log(charaterData)
            });
            
                // allChar.data.forEach((individualChar) => {
            //         let charName = individualChar.attributes.name
            //         if(individualChar.id == "c3e73383-319f-4ff4-bdbb-3e588962366e"){
            //             console.log(charName)        // console log individual char name
            //         }
            //     });
    } catch (error) {
        console.log(error)
    }
}

initialLoad()







// function getCharData(initialLoad){
    // let indiv_char_name = 
// }

//Add images and content to Card



class HarryPotterCharacters{
    constructor(name, gender, eye_color, image, wand, wiki_link){
        this.name = name,
        this.gender = gender,
        this.eye_color = eye_color
        this.image = image
        this.wand = wand,
        this.wiki_link = wiki_link
    }
}

// const char_one = new HarryPotterCharacters("Harry Potter", "Muggle Born", "Whatever wand", "www.wikilink.com")   //This is created a new character using the class object I created above.
// console.log(char_one)


// array of objects. for loop or for each or Map.