function modali(){
    $(document).ready(function(){
      $('.modal').modal({
        dismissible: false,
        complete: function() { alert('Closed triggered'); }
        });
    });
    $( "#caricamento" ).hide();
    $( "#episoditable" ).show();
}

window.onload = modali;

function terminaanime() {
    document.querySelectorAll('.anime').forEach(vid => vid.pause());
}

function bufferaepisodi(softavailable, telegramsoft, titoliavailable, episodi, telegramlink, episoft, titoli){
    $( "#episoditable" ).hide();
    var caricamento = document.getElementById("caricamento");
    caricamento.innerHTML = '<div class="row"><div class="col s12 m10 l10 offset-m1 offset-l1"><div class="progress purple lighten-4"><div class="indeterminate purple"></div></div>Le Streghe stanno invocando gli episodi. Attendi...<div class="col s0 m1 l1"></div></div></div>';
    $( "#caricamento" ).show();
    var buffer = '<table class="highlight"><thead><tr><th scope="col">Ep.</th>';
    if (titoliavailable === 1) {
        buffer += '<th scope="col">Titolo</th>';
    }
    buffer += '<th scope="col" class="right-align">Azioni</th></tr></thead><tbody>';

    for (let i = 0; i < episodi.length+0; i++) {
        buffer += '<tr><td scope="row">' + (i+1) + '</td>';
        if (titoliavailable === 1) {
            buffer += '<td scope="row">' + titoli[i] + '</td>';
        }
        buffer += '<td scope="row" class="right-align">' + '<a class="waves-effect waves-light btn modal-trigger purple" href="#ep'+ (i+1) +'"><i class="material-icons">play_arrow</i></a><a class="waves-effect waves-light btn modal-trigger purple" href="'+ episodi[i] +'"><i class="material-icons">file_download</i></a><div id="ep' + (i+1) + '" class="modal"><div class="modal-content no-pad"><video class="responsive-video anime" src="'+ episodi[i]+ '" controls></video></div><div class="modal-footer"><a href="' + episodi[i] + '" class="waves-effect waves-purple btn-flat" download><i class="large material-icons left">file_download</i>Hardsub</a><a class="modal-action modal-close waves-effect waves-purple btn-flat" onclick="terminaanime()"><i class="large material-icons left">close</i>Chiudi</a></div></div></td></tr>';
    }
    buffer += '</tbody></table>';
    if(telegramsoft === 1) {
        buffer += '<p class="light center">Gli episodi softsub di questo anime sono disponibili su Telegram!</p><p class="center"><a class="waves-effect waves-light btn modal-trigger purple" href="'+ telegramlink +'" target="_blank">Vai al canale Telegram</a></p>'
    }
    console.log("Episodi caricati.");

    return buffer;
}