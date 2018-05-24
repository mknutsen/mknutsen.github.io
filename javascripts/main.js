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

function showPics(what) {
    var open = $('#travel').is(":visible");
    if (open)
    {
        $('#travel').slideToggle("slow", function(){
            $('#myHeader').animate({'paddingTop' : "40%"}, 'slow');
        });
    }
    else
    {
        var current = document.getElementById("myHeader").style.paddingTop; 
        if (current == "0px") {

            $('#projects').slideToggle("slow", function(){
                    $('#travel').slideToggle("slow");
            });
        } 
        else
        {
            $('#myHeader').animate({'paddingTop' : "0px"}, 'slow', function(){
                $('#travel').slideToggle("slow");
            });
        }
    }
    
}

function showDiv(what) {
    var open = $('#projects').is(":visible");
    if (open)
    {
        $('#projects').slideToggle("slow", function(){
            $('#myHeader').animate({'paddingTop' : "40%"}, 'slow');
        });
    }
    else
    {
        var current = document.getElementById("myHeader").style.paddingTop; 
        if (current == "0px") {

            $('#travel').slideToggle("slow", function(){
                    $('#projects').slideToggle("slow");
            });
        } 
        else
        {
            $('#myHeader').animate({'paddingTop' : "0px"}, 'slow', function(){
                $('#projects').slideToggle("slow");
            });
        }
    }
}

//<i class="fa fa-undo fa-3x"></i>
