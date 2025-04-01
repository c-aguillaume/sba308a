
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
                
                let tenCharacters = 
            allChar.data.forEach(element => {
                let charaterData = new HarryPotterCharacters(element.name, element.bloods_status, element.wand, element.wiki_link)
                return charaterData
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
    constructor(name,bloods_status,wand,wiki_link){
        this.name = null,
        this.bloods_status = null,
        this.wand = null,
        this.wiki_link = null
    }
}

// const char_one = new HarryPotterCharacters
// console.log(char_one)


// array of objects. for loop or for each or Map.