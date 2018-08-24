// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

// const new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

db.Artist.deleteMany({}, (err, removedArtist) => {
    if (err) {
        return console.log(err)
    }

    console.log('removed artists')
})


var firstArtist = {
    name: 'Taylor Swift',
    age: 28,
    topAlbum: '1989',
    Location: 'California'
}

db.Artist.create(firstArtist, (err, artist) => {
    if (err) {
        return console.log(err) 
    }
    console.log(artist);
    
})




db.Artist.find({}, (err, artistlist) => {
    if (err) {
        return console.log(err);
    }

    console.log(artistlist)
})