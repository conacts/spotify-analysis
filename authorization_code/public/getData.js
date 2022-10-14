function buildArtists50(r) {
    var data = r.items;
    console.log(data);
    $('#artists').empty();
    $('#artists').append('<ul class="list-group list-group-flush" style="margin-top: 4rem;"');
    var c = "list-group-item";
    for (let i=0; i < data.length; i++) {
        var artist_img = '<a><img width="64" height="64" src="' + data[i].images[2].url + '"></a>';
        var artist_name = '<a style="font-style: bold; font-size: 1.5rem; margin-left: 2rem;">' + (i+1) + '. ' + data[i].name + '</a>';
        $('#artists').append('<li class="' + c + '">' + artist_img + artist_name + '</li>')

    }
    $('#artists').append('</ul>');
}

function buildTracks50(r) {
    var data = r.items;
    console.log(data);
    $('#songs').empty();
    $('#songs').append('<ul class="list-group list-group-flush" style="margin-top: 4rem;"');
    var c = "list-group-item";
    for (let i=0; i < data.length; i++) {
        var vid = '<video style="text-align: center;" controls="" name="media"><source src="' + data[i].preview_url + '" type="audio/mpeg"></video>';
        var track_name = '<a style="font-style: bold; font-size: 1.5rem; margin-left: 2rem;">' + (i+1) + '. ' + data[i].name + '</a>';
        if (data[i].preview_url == undefined) {
            vid = '';
        }
        var album_cover = '<a><img src="' + data[i].album.images[2].url + '"></a>';
        $('#songs').append('<li class="' + c + '">'  + album_cover + track_name + '</li>')
    }
    $('#songs').append('</ul>');
}
