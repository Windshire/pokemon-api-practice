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

            var delimiter = "<p>Type: ";

            for (var i = 0; i < json.types.length; ++i) {
                data += delimiter;
                data += "<a class=\"" + json.types[i].type.name + "\">";
                data += json.types[i].type.name;
                data += "</a>";
                delimiter = "/";
            }

            data += "</p>";

            data += "<p>Height: " + json.height/10 + "m";
            data += "</p>";

            data += "<p>Weight: " + json.weight/10 + "kg";
            data += "</p>";


            $("#pokeResult").html(data);
        },
        error: function() {
            $("#pokeResult").html("QUERY FAILED (Did you input a valid id/name?)");
        }
    });
}
