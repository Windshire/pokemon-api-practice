$(document).ready(function() {
    $("#pokeSubmit").click(clickPoke);
});

var clickPoke = function(e) {
    e.preventDefault();

    $("#pokeResult").html("Loading data...");

    $.ajax({
        url : "https://pokeapi.co/api/v2/pokemon/" + $("#pokeInput").val().toLowerCase(),
        dataType : "json",
        success : function(json) {
            console.log(json);
            var data = "<h4>#" + json.id + ": " + json.name + " data:</h4>";
            data += "<img src=\""+json.sprites.front_default+"\">";
            $("#pokeResult").html(data);
        }
    });
}
