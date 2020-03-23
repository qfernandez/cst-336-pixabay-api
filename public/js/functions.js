function searchImage() {

$.ajax({
    type: "GET",
    url: "https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e",
    dataType: "json",
    data: { "q":$("#keyword").val() },
        success: function(data, status) {
            let randomImage = Math.floor(Math.random() * data.hits.length);
            $('#image').html("<img src='"+ data.hits[ randomImage ].webformatURL+"' width='500'>");
            $('#image').append("<br>Likes: " + data.hits[ randomImage ].likes)
        }
    }); //ajax 
}//searchImage()

function loadImages(){
    $.ajax({
        type: "GET",
        url:"https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e",
        dataType: "json",
        data: { "q":$("#anime").val() },
            success: function(data, status) {
                let randomImage = Math.floor(Math.random() * data.hits.length);
                $('#image').html("<img src='"+ data.hits[ randomImage ].webformatURL+"' width='500'>");
        }
    }); //ajax
} //used to load images