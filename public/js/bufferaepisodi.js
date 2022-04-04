function modali(){
    $(document).ready(function(){
      $('.modal').modal({
        dismissible: false,
        complete: function() { alert('Closed triggered'); }
        });
      });
    }

window.onload = modali;

function bufferaepisodi(softavailable, telegramsoft, titoliavailable, episodi, telegramlink, episoft, titoli){
    var buffer = '<table class="highlight"><thead><tr><th scope="col">Episodio</th>';
    if (titoliavailable == 1) {
        buffer += '<th scope="col">Titolo</th>';
    }
    buffer += '<th scope="col">Azioni</th></tr></thead><tbody>';

    for (let i = 0; i < episodi.length+0; i++) {
        buffer += '<tr><td scope="row">' + (i+1) + '</td>';
        if (titoliavailable == 1) {
            buffer += '<td scope="row">' + titoli[i] + '</td>';
        }
        buffer += '<td scope="row">' + '<a class="waves-effect waves-light btn modal-trigger purple" href="#ep'+ (i+1) +'"><i class="material-icons">play_arrow</i></a> <a class="waves-effect waves-light btn modal-trigger purple" href="'+ episodi[i] +'"><i class="material-icons">file_download</i></a><div id="ep' + (i+1) + '" class="modal"><div class="modal-content no-pad"><video class="responsive-video" src="'+ episodi[i]+ '" controls></video></div><div class="modal-footer"><a href="' + episodi[i] + '" class="waves-effect waves-purple btn-flat"><i class="large material-icons left">file_download</i>Download (Hardsub)</a><a class="modal-action modal-close waves-effect waves-purple btn-flat"><i class="large material-icons left">close</i>Chiudi</a></div></div></td></tr>';
        
    }
    buffer += '</tbody></table>';
    console.log("Episodi caricati.");

    return buffer;
}