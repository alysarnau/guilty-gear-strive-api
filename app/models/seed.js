// {
//     "character": 
    // [
    // {
    //     "character": {
    //     {
    //         "name": "Sol Badguy",
    //         "race": "Gear",
    //         "gender": "male",
    //         "origin": "USA",
    //         "eyeColor": "brown",
    //         "bloodType": "Unanalyzable",
    //         "height": 184,
    //         "weight": 74,
    //         "isADandy": false
    //     }
    //     }
    // }
    // ]
// }

// seed js is going to be the file we run whenever we want to seed our database
// we'll create a bunch of characters at once!
// we're changing it so that it will only delete characters without an owner!

const mongoose = require('mongoose')
const Character = require('./character')
const db = require('../../config/db')

const startCharacters = [
    {
        name: "Ky Kiske",
        race: "human",
        age: 30,
        gender: "male",
        origin: "France",
        eyeColor: "Blue-green",
        bloodType: "AB",
        height: 178,
        weight: 58,
        isADandy: false
    },
    {
        name: "May",
        race: "human",
        gender: "female",
        origin: "Unknown",
        eyeColor: "Black",
        bloodType: "B",
        height: 158,
        weight: 49,
        isADandy: false
    }, 
    {
        name: "Faust",
        race: "human",
        gender: "male",
        origin: "Unknown",
        eyeColor: "unknown",
        bloodType: "unknown",
        height: 282,
        weight: 55,
        isADandy: false
    },
    {
        name: "Potemkin",
        race: "human",
        gender: "male",
        origin: "Zepp",
        eyeColor: "White",
        bloodType: "N/A",
        height: 245,
        weight: 656,
        isADandy: false
    },
    {
        name: "Chipp Zanuff",
        race: "human",
        gender: "male",
        origin: "United States",
        eyeColor: "Red",
        bloodType: "B",
        height: 183,
        weight: 67,
        isADandy: false
    },
    {
        name: "Zato-ONE",
        race: "human",
        gender: "male",
        origin: "Spain",
        eyeColor: "Formerly blue",
        bloodType: "A",
        height: 181,
        weight: 68,
        isADandy: true
    },
    {
        name: "Slayer",
        race: "Nightwalker",
        gender: "male",
        origin: "Transylvania",
        eyeColor: "brown",
        bloodType: "Unanalyzable",
        height: 185,
        weight: 70,
        isADandy: true
    }
]

// first, we need to connect to the database
mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        // first we remove all of the pets
        // here we can add something to make sure that we only delete pets without an owner
        Character.deleteMany( {owner: null} )
            .then(deletedCharacters => {
                console.log('Here are the deleted characters: \n', deletedCharacters);
                // the next step is to use our startCharacters array to create our seeded character roster
                Character.create(startCharacters)
                    .then(newCharacters => {
                        console.log('Here are the new characters: \n', newCharacters);
                        mongoose.connection.close();
                    })
                    .catch(error => {
                        console.log(error);
                        mongoose.connection.close();
                    })
            })
            .catch(error => {
                console.log(error);
                mongoose.connection.close();
            })
    })
    .catch(error => {
        console.log(error);
        mongoose.connection.close();
    })