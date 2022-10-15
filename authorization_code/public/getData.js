let sd;
/* 
--> builds bootstrapped theme list of artists

*/
function buildArtists50(r) {
    var data = r.items;
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

/*
builds bootstrapped theme list of songs


*/
function buildTracks50(r) {
    var data = r.items;
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

/*


*/
function buildPlaylistStats(r) {
    var data = r.items;
}

// playlistStats 
/*


*/
function getPlaylistStats(r, access_token) {
    $.ajax({
        url: r,
        headers: {
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        success: function(response) {
            getPlaylistStats(response);
        }
    });
}

/*


*/
function buildPlaylistButton(r, access_token) {
    data = r.items;

    for (let i=0; i < data.length; i++) {
        $('#addPlaylistsHere').append(
              '<a class="dropdown-item" onclick="buildPlaylistStats(\'' + data[i].id +  '\',\'' + access_token + '\')">' +  data[i].name + '</a>'
        );
    }
}


/*


*/
function buildPlaylistStats(id, access_token) {
    $.ajax({
        url: "https://api.spotify.com/v1/playlists/" + id + "/tracks?limit=50",
        headers: {
            'Authorization': 'Bearer ' + access_token,
        },
        success: function(response) {
            // var [songMetric, songs] = buildPlaylistMetrics(response, access_token);
            songs = buildPlaylistMetrics(response, access_token);
            var danceabilityList = [];
            var energyList = [];
            var valenceList = [];
            var tempoList = [];
            for (var i=0; i < songMetric.length; i++) {
                danceabilityList.push(songMetric[i].danceability);
                energyList.push(songMetric[i].energy);
                valenceList.push(songMetric[i].valence);
                tempoList.push(songMetric[i].tempo);
            }
        }
    });
}

/*


*/
function buildPlaylistMetrics(r, access_token) {
    data = r.items;
    var ids = ''; 
    var songs = [];
    var songData = '';
    for (var i = 0; i < data.length; i++) {
        var id = data[i].track.id;
        if (typeof(id) != "undefined") {
            ids += data[i].track.id + ',';
            songs.push(data[i].track.name);
        }
    }
    console.log('faggy');
    getSongData(ids, access_token).then((
        function(data) {
            return data;
        }
    ));
    return songs;
    
}

/*
params: id "id" / ids "{id, id, id}"
returns: song data array

*/
async function getSongData(ids, access_token) {
    let response = new Promise(function(resolve, reject) {
        resolve($.ajax({
            url: 'https://api.spotify.com/v1/audio-features?ids=' + ids, 
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + access_token,
            },
        }));
    });
    console.log(response);
    sd = await response;
    return response;

}

/* 

them charts go boom

function buildCharts() {
}
*/