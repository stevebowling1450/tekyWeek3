function myButton_click(){
    alert ("clicked!");
}




$(function() {
// wire up the click event handlers.

$("#myButton").on("click", myButton_click);

$("li:contains('mad')").on("click", function(){
$(this).hide();
});
});