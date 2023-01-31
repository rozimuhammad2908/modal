$(document).ready(function () {
    var $btn = $('.close-btn')
    var $div = $(".overlay");
    var $text = $(".popup");
    var $telefonlar = $(".phone");
    var $btntel = $(".btn")


    $btntel.click(function (e) {
        $div.css({
            display: "block",
        });
        $text.css({
            transform: "translate(-50%, -50%)",
            top: "35%",
        });
        $telefonlar.html(e.target.getAttribute("data-phone"));
    });

    $btn.click(function (e) {
        $div.css({
            display: "none",
        });
        $text.css({
            transform: "translate(-50%, -250%)",
            top: "35%",

        });
    })
});