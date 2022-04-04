function modali(){
    $(document).ready(function(){
      $('.modal').modal({
        dismissible: false,
        complete: function() { alert('Closed triggered'); }
        });
    console.log("Modali caricati.")  
    });
}
