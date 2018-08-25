// require express and other modules
const express = require('express');
const app = express();

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

const db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', (req, res) => {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/Cyrusluke925/personal-api", 
    baseUrl: "https://floating-crag-86445.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"},
      {method: "GET", path: "/api/artists", description: "Data about artists"},
      {method: "POST", path: "/api/artist", description: "Create a new artist"} // CHANGE ME

    ]
  })
});

/**********
 * SERVER *
 **********/


app.get('/api/profile', (req, res) => {
  
  res.json( {
    name: 'Luke',
    gitHub: 'https://github.com/Cyrusluke925?tab=repositories',
    location: 'San Francisco',
    siblings: ['katie', 'nick', 'leah']
})


})





app.get('/api/artists', (req, res) => {

  db.Artist.find({ }, (err, artists) => {
    if (err) {
      return console.log(err);
    }
    res.json({data: artists});
  })
})


app.post('/api/artists', (req, res) => {
  let artistInput = req.body;
  console.log(req);

  db.Artist.create(artistInput, (err, savedArtist) => {
    if (err) {
      return console.log(err);
    }
    res.json(savedArtist);
  })
})

app.delete('/api/artists/:id', (req, res) => {
  let artistId = req.param._id;

  db.Artist.deleteOne ( {_id: artistId }, (err, deletedArtist) => {
    if (err) {
      return console.log(err)
    }
    console.log(deletedArtist)
    res.json(deletedTodo)
  })
});




// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
