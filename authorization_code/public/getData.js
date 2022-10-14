// builds bootstrapped theme list of artists
function buildArtists50(r) {
    var data = r.items;
    console.log(data);
    $('#artists').empty();
    $('#artists').append('<div style="padding-top: 4rem;"></div>');
    $('#artists').append('<ul class="list-group list-group-flush"');
    var c = "list-group-item";
    for (let i=0; i < data.length; i++) {
        var artist_img = '<a><img width="64" height="64" src="' + data[i].images[2].url + '"></a>';
        var artist_name = '<a style="font-style: bold; font-size: 1.5rem; margin-left: 2rem;">' + (i+1) + '. ' + data[i].name + '</a>';
        $('#artists').append('<li class="' + c + '">' + artist_img + artist_name + '</li>')

    }
    $('#artists').append('</ul>');
}

// builds bootstrapped theme list of songs
function buildTracks50(r) {
    var data = r.items;
    console.log(data);
    $('#tracks').empty();
    $('#tracks').append('<div style="padding-top: 4rem;"></div>');
    $('#tracks').append('<ul class="list-group list-group-flush" style="margin-top: 4rem;"');
    var c = "list-group-item";
    for (let i=0; i < data.length; i++) {
        var vid = '<video style="text-align: center;" controls="" name="media"><source src="' + data[i].preview_url + '" type="audio/mpeg"></video>';
        var track_name = '<a style="font-style: bold; font-size: 1.5rem; margin-left: 2rem;">' + (i+1) + '. ' + data[i].name + '</a>';
        if (data[i].preview_url == undefined) {
            vid = '';
        }
        var album_cover = '<a><img src="' + data[i].album.images[2].url + '"></a>';
        $('#tracks').append('<li class="' + c + '">'  + album_cover + track_name + '</li>')
    }
    $('#tracks').append('</ul>');
}

// grabs moods from all the songs
function getMoods(r) {
    let moods = [];
    data = r.items;
    return moods;
}