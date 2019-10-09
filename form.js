$(document).ready(function() {

    $('form').submit(function(event) {

        event.preventDefault();

        $.ajax({
            type: $(this).attr('method'),
            url: "http://127.0.0.1:5500/index.html",
            headers: {'Access-Control-Allow-Origin': '*'},
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function(result) {
                alert(result);
            },
            
        });
    });
});
