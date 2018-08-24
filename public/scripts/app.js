console.log("Sanity Check: JS is working!");

$(document).ready(function(){



$.ajax({
    method: 'GET',
    url: '/api/artists',
    success: function onSuccess(e) {
        e.data.forEach(element => {
            $('#artistList').append(`<p>The artist, ${element.name}, is ${element.age} years old and is living in ${element.Location}. Their top album is ${element.topAlbum}</p id='delete'><button>delete</button>`)
        });
        
        
        
    },
    error: function onError() {
        console.log('error')
    }
})







$('form').on('submit', function(e) {
    
    $.ajax({
        method: 'POST',
        url: '/api/artists/',
        data: $(this).serialize(),
       

    })

})
})  
