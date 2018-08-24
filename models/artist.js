const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const artistSchema = new Schema({
    name: String,
    topAlbum: String, 
    age: Number,
    Location: String

});



const Artist =  mongoose.model('Artist', artistSchema);

module.exports = Artist;



