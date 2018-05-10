$(function(){
    $(".container .col-xs-12").hide();

    $('.jumbotron').click(function() {
        // Affichage de la réponse placée juste après dans le code HTML
        $(".col-xs-12:eq(0)").slideDown();
    });

    $(".col-xs-12:eq(0)").click(function() {
        $(".col-xs-12:eq(1)").slideDown();
    });

    $(".col-xs-12:eq(1)").click(function() {
        $(".col-xs-12:eq(2)").slideDown();
    });

    $(".col-xs-12:eq(2)").click(function() {

        $(".jumbotron").addClass("lastJumbotron")
        $(".jumbotron .clic").hide();

        $(".newParagraphe1").addClass("lastPhrase1")
        $(".newParagraphe2").addClass("lastPhrase2")
        $(".newParagraphe3").hide()


        $(".newParagraphe1").html("Joyeux")
        $(".newParagraphe2").html("anniversaire")

        $("body").addClass("lastBody");


        var player = document.querySelector('#audioPlayer');
        player.play();

    });
});
