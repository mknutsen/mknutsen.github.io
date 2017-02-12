function showDiv(what) {
    if(document.getElementById('main').style.display == "") {
        document.getElementById('main').style.display = "none";
        document.getElementById('projects').style.display = "";

    } else{
        document.getElementById('main').style.display = "";
        document.getElementById('projects').style.display = "none";
    }

    $(what).find('i').toggleClass('fa-folder-o fa-folder-open-o');
}
//<i class="fa fa-undo fa-3x"></i>
