function showDiv(what) {
    if(document.getElementById('main').style.display == "") {
        $('#main').slideToggle("fast",function(){
        	$('#projects').slideToggle("slow");
        });

    } else{
        $('#projects').slideToggle("fast",function(){
        	$('#main').slideToggle("slow");
        });
    }

    $(what).find('i').toggleClass('fa-folder-o fa-folder-open-o');
}
//<i class="fa fa-undo fa-3x"></i>
