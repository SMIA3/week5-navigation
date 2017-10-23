document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    $( function() {
        $( "#mypanel" ).panel();
    } );
}

<!---https://learn.jquery.com/using-jquery-core/document-ready/-->