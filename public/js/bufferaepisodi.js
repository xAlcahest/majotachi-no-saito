function modali() {}

window.onload = modali;

function terminaanime() {
    document.querySelectorAll('.anime').forEach(vid => vid.pause());
}

function bufferaepisodi(softavailable, telegramsoft, titoliavailable, episodi, telegramlink, episoft, titoli) {
    $("#episoditable").hide();
    var buffer = '<table class="highlight"><thead><tr><th scope="col">Ep.</th>';
    if (titoliavailable === 1) {
        buffer += '<th scope="col">Titolo</th>';
    }
    buffer += '<th scope="col" class="right-align">Azioni</th></tr></thead><tbody>';

    for (let i = 0; i < episodi.length; i++) {
        buffer += '<tr><td scope="row">' + (i + 1) + '</td>';
        if (titoliavailable === 1) {
            buffer += '<td scope="row">' + titoli[i] + '</td>';
        }
        buffer += '<td scope="row" class="right-align">' + '<a class="waves-effect waves-light btn modal-trigger purple" href="#ep' + (i + 1) + '"><i class="material-icons">play_arrow</i></a><a class="waves-effect waves-light btn modal-trigger purple" href="' + episodi[i] + '?dl"><i class="material-icons">file_download</i></a><div id="ep' + (i + 1) + '" class="modal"><div class="modal-content no-pad"><div id="playerbox' + (i + 1) + '" class="bganime"></div></div><div class="modal-footer"><a href="' + episodi[i] + '" class="waves-effect waves-purple btn-flat" download><i class="large material-icons left">file_download</i>Hardsub</a><a class="modal-action modal-close waves-effect waves-purple btn-flat" onclick="terminaanime()"><i class="large material-icons left">close</i>Chiudi</a></div></div></td></tr>';
    }
    buffer += '</tbody></table>';
    if (telegramsoft === 1) {
        buffer += '<p class="light center">Gli episodi softsub di questo anime sono disponibili su Telegram!</p><p class="center"><a class="waves-effect waves-light btn modal-trigger purple" href="' + telegramlink + '" target="_blank">Vai al canale Telegram</a></p>'
    }

    console.log("Episodi caricati.");

    return buffer;
}

function caricaplayer(episodi) {
    $('.modal').modal({
        dismissible: false,
        complete: function () {
            alert('Closed triggered');
        }
    });
    $("#episoditable").show();

    for (let i = 0; i < episodi.length; i++) {
        var playerbox = document.getElementById('playerbox' + (i + 1) + '');
        playerbox.innerHTML = '<video class="responsive-video anime" src="' + episodi[i] + '" controls preload="metadata"></video>';
    }
}
