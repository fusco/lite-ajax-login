function initGurutheme(){
    if(_section == 'gurustore'){
       $('gurustore_extensions').update($('guru_store_response').innerHTML)
    }
}
Event.observe(window, 'load', function() {
   initGurutheme();
});
