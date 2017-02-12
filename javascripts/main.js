function showDiv(what) {
    if(document.getElementById('main').style.display == "") {
        $('#main').toggle();
        $('#projects').toggle();

    } else{
        $('#projects').toggle();
        $('#main').toggle();
    }

    $(what).find('i').toggleClass('fa-folder-o fa-folder-open-o');
}
//<i class="fa fa-undo fa-3x"></i>
