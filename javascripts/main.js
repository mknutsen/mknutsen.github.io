function showDiv(what) {
    if(document.getElementById('main').style.display == "") {
        document.getElementById('main').style.display = "none";
        document.getElementById('projects').style.display = "";
        what.src = 'images/back.png';

    } else{
        document.getElementById('main').style.display = "";
        document.getElementById('projects').style.display = "none";
        what.src = 'images/portfolio3.png';
    }
}
