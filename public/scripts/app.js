console.log("Sanity Check: JS is working!");
$( document ).ready(function() {
    console.log( "ready!" );


const allArtists = [];


$.ajax({
    method: 'GET',
    url: '/api/artists',
    success: function getArtists(e) {
        e.data.forEach(element => {
            allArtists.push(element);
        });
        listArtists();
        }
        
    });

    


    var listArtists = function(){
    allArtists.forEach(function(artist){
        $('ul').append(`<li class="listItem">${artist.name} is ${artist.age} and is located in ${artist.Location}. Top Album is ${artist.topAlbum}</li><button class="delete">DELETE</button>`)
    });
    }
    
            
        $('.delete').on('click', function (element) {
        


            $.ajax({
                method: 'DELETE',
                url:`/api/artists/:id`,
                success: function onSuccess() {
                    
                }
            });
        });



    var deleteArtists = function() {
        allArtists.forEach(function(artist){
            
        })
    }





        $('form').on('submit', function(e) {
    
            $.ajax({
                method: 'POST',
                url: '/api/artists/',
                data: $(this).serialize(),
        
            })
        
        })
});


    




