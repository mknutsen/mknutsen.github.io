$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
    console.log("please hire me");
    var clipboard = new ClipboardJS('.email', {
            text: function() {
                return 'mknutsen99@gmail.com';
            }
        });

        clipboard.on('success', function(e) {
            var element = document.getElementsByClassName("email")[0]
            $(element).attr('title', 'Copied!')
                .tooltip('fixTitle')
                .tooltip('show');
        });

        clipboard.on('error', function(e) {
        });
});

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
