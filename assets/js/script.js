$(document).ready( function(){

    // MENU
    $('#burger').click(function(){
        $('.navi').removeClass('hidden');
        $('.navi').addClass('visible');
        $('body').css('overflow', 'hidden');
    })

    // Ferme le menu après clic sur la croix ou sur un lien.
    $('#cross').click(function(){
        $('.navi').addClass('hidden');
        $('.navi').removeClass('visible');
        $('body').css('overflow', 'auto');
    })
    $('nav a').click(function(){
        $('.navi').addClass('hidden');
        $('.navi').removeClass('visible');
        $('body').css('overflow', 'auto');
    })

    // INFO PROJETS
    $('#works').children("article").each(function(){
        $(this).mouseover(function(){
            $(this).children('.info').removeClass('hidden');
            $(this).children('.info').addClass('visible');
        })
        $(this).mouseout(function(){
            $(this).children('.info').addClass('hidden');
            $(this).children('.info').removeClass('visible');
        })
    })



});