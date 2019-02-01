$(document).ready(function (){
    // console.log("Document Ready..");
    $(".modal").addClass('fade');
    $("img").on('click', function(){
        var src = $(this).attr("src")
        console.log(src);
        $("#status").html(src).css('color','red');
        $(".modal img").attr("src", src);
        $(".modal").modal('show');
    });
});