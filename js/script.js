$(function () {
    $('.columns').on('click', '.column', function (e) {
        var c = $('<div class="column new"/>').html('N');
        $('.column').first().before(c);
    });

    $('.editor').click(function(){
        var el = $('.column').first();
        el.addClass('delete');
        el.bind('webkitAnimationEnd',function(){el.remove()});
    })
})