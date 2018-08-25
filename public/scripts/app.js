console.log("Sanity Check: JS is working!");
$( document ).ready(function() {
    console.log( "ready!" );

const baseUrl = 'api/artists'
const allArtists = [];
let theId;


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
        $('ul').append(`<li class="listItem">${artist.name} is ${artist.age} and is located in ${artist.Location}. Top Album is ${artist.topAlbum}</li><button data-id="${artist._id}" class="delete">DELETE</button>`)
    });
    }
    


    
        $('ul').on('click', '.delete', function (event) {
        


        var deleteId = $(this).attr('data-id');

            $.ajax({
                method: 'DELETE',
                url: baseUrl + '/' + deleteId,
                success: window.location.reload()
                    
                
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


    




