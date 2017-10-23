function showDiv(what) {
    // if(document.getElementById('main').style.display == "") {
    //     $('#main').slideToggle("slow",function(){
    //     	$('#projects').slideToggle("slow");
    //     });

    // } else{
    //     $('#projects').slideToggle("slow",function(){
    //     	$('#main').slideToggle("slow");
    //     });
    // }
    $('#projects').slideToggle("slow");

    $(what).find('i').toggleClass('fa-folder-o fa-folder-open-o');
}
//<i class="fa fa-undo fa-3x"></i>
