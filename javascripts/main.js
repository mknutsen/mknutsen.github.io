function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none')
}

function isTouchDevice(){
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

$(document).ready(function(){
    if(isTouchDevice()===false) {
        $('[data-toggle="tooltip"]').tooltip();  
    }
    // console.log("please hire me");
    var clipboard = new ClipboardJS('.email', {
            text: function() {
                return 'maxknutsen594@gmail.com';
            }
        });

        clipboard.on('success', function(e) {
            var element = document.getElementsByClassName("email")[0]
                $('[data-toggle="tooltip"]').tooltip();  

            // if(isTouchDevice()===false) {
                $(element).attr('title', 'copied!')
                    .tooltip('fixTitle')
                    .tooltip('show');
            // }
        });

        clipboard.on('error', function(e) {
        });
});

// far fa-file-alt fa-3x
// fa-regular fa-paper-plane

// far fa-folder fa-3x
// fa-folder fa-folder-open   

function showPortfolio(what) {
    // console.log("what");
    // console.log(what);
    var isPortSectionHidden = isHidden(document.getElementById("portfolio"));
    var isPaddingDown = document.getElementById("myHeader").style.paddingTop != "0px"; 
    // console.log(isPaddingDown);
    // console.log(document.getElementById("myHeader").style.paddingTop);
    if (isPaddingDown && isPortSectionHidden) {
        // console.log("title in center");
        // title is in center and nothing else is up
        $('#myHeader').animate({'paddingTop' : "0px"}, 'slow', function(){   
            $('#portfolio').slideToggle("slow");
            $( "#port" ).find('i').toggleClass('fa-folder fa-folder-open');
        });
    }
    else if (!isPaddingDown && isPortSectionHidden) {
        // console.log("project showing");
        // title is at top and port is hidden so exp must be visible
        $('#experience').slideToggle("slow", function(){
            $( "#exp" ).find('i').toggleClass('fa-regular fa-paper-plane');
            $( "#port" ).find('i').toggleClass('fa-folder fa-folder-open');
            $('#portfolio').slideToggle("slow");
        });
    }

    else if (!isPaddingDown && !isPortSectionHidden) {
        // hiding the visible exp section
        $('#portfolio').slideToggle("slow", function(){
            $( "#port" ).find('i').toggleClass('fa-folder fa-folder-open');
            $('#myHeader').animate({'paddingTop' : "40%"}, 'slow');
        });
    }

    else if (isPaddingDown && !isPortSectionHidden) {
        // console.log("error bad thing");
        $('#portfolio').slideToggle("slow");
        $( "#port" ).find('i').toggleClass('fa-folder fa-folder-open');
        $('#myHeader').animate({'paddingTop' : "40%"}, 'slow');
    }
}

function showWorkExperience(what) {
    var isExpSectionHidden = isHidden(document.getElementById("experience"));
    var isPaddingDown = document.getElementById("myHeader").style.paddingTop != "0px"; 
    // console.log(isPaddingDown);
    // console.log(document.getElementById("myHeader").style.paddingTop);
    if (isPaddingDown && isExpSectionHidden) {
        // console.log("title in center");
        // title is in center and nothing else is up
        $('#myHeader').animate({'paddingTop' : "0px"}, 'slow', function(){   
            $( "#exp" ).find('i').toggleClass('fa-regular fa-paper-plane');
            $('#experience').slideToggle("slow");
        });
    }
    else if (!isPaddingDown && isExpSectionHidden) {
        // console.log("project showing");
        // title is at top and exp is hidden so projects must be visible
        $('#portfolio').slideToggle("slow", function(){
            $( "#exp" ).find('i').toggleClass('fa-regular fa-paper-plane');
            $( "#port" ).find('i').toggleClass('fa-folder fa-folder-open');
            $('#experience').slideToggle("slow");
        });
    }

    else if (!isPaddingDown && !isExpSectionHidden) {
        // hiding the visible exp section
        $('#experience').slideToggle("slow", function(){
            $( "#exp" ).find('i').toggleClass('fa-regular fa-paper-plane');
            $('#myHeader').animate({'paddingTop' : "40%"}, 'slow');
        });
    }

    else if (isPaddingDown && !isExpSectionHidden) {
        $('#experience').slideToggle("slow");
        $( "#exp" ).find('i').toggleClass('fa-regular fa-paper-plane');
        $('#myHeader').animate({'paddingTop' : "40%"}, 'slow');
    }
}