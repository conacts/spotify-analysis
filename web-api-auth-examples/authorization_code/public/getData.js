function buildArtists50(r) {
    var data = r.items;
    console.log(data);
    $('#artists').empty();
    $('#artists').append('<ul class="list-group list-group-flush" style="margin-top: 4rem;"');
    var c = "list-group-item";
    for (let i=0; i < data.length; i++) {
        $('#artists').append('<li class="' + c + '">' + data[i].name + '</li>')
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
        var vid = '<video controls="" name="media"><source src="' + data[i].preview_url + '" type="audio/mpeg"></video>';
        var album_cover = '<img src="' + data[i].album.images[1].url + '">';
        $('#songs').append('<li class="' + c + '"><a>' + (i+1) + '. ' + data[i].name + '</a><a>' + vid + '</a>' + album_cover + '</li>')
    }
    $('#songs').append('</ul>');
}
