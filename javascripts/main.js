function showDiv(what) {
    // if( $(what).hasClass('fa-folder-o')) {
    // //     $('#main').slideToggle("slow",function(){
    // //     	$('#projects').slideToggle("slow");
    // //     });

    //     // document.getElementById("myHeader").style.paddingTop = "40%";
    // } else{
    // //     $('#projects').slideToggle("slow",function(){
    // //     	$('#main').slideToggle("slow");
    // //     });
    // }

    var current = document.getElementById("myHeader").style.paddingTop;
    $(what).find('i').toggleClass('fa-folder-o fa-folder-open-o');    
    if (current == "0px") {
        $('#projects').slideToggle("slow", function(){
            $('#myHeader').animate({'paddingTop' : "40%"}, 'slow');
        });
    } else {
        $('#myHeader').animate({'paddingTop' : "0px"}, 'slow', function(){   
            $('#projects').slideToggle("slow");
        });
    }
    // var current = document.getElementById("myHeader").style.paddingTop;
    // document.getElementById("myHeader").style.paddingTop = "40%";
}
//<i class="fa fa-undo fa-3x"></i>
