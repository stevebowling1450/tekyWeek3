$(document).ready(function(){
    $("#p1").mouseenter(function(){
        $("#p1").fadeTo( "fast",0.5)
    });
});

$(document).ready(function(){
    $("h3").mouseenter(function(){
        $("h3").css( "color","green")
    });
});
$(document).ready(function(){
    $("ul :first-child").mouseenter(function(){
        $("ul :first-child").css("color", "blue")
    });
});