function wopen(wurl, wname, w, h) {
    ww = window.open(wurl, wname, 'width=' + w + ',height=' + h + ',resizable=1,scrollbars=no,menubar=no,status=no');
    ww.resizeTo(w, h);
    ww.focus();
}


$(function(){

    // greeting message
    var $greetingContainer = $('.js-greeting-messages');
    var greetingMessages =  (typeof Greeting != 'undefined') ? Greeting : [];
    if ($greetingContainer.length > 0 && greetingMessages.length > 0) {
        var randomGreeting = greetingMessages[Math.round(Math.random() * (greetingMessages.length - 1))];
        $('.js-greeting', $greetingContainer).html(randomGreeting);
    }


    $('.js-dropdown').each(function(){
        var $dropdown     = $(this),
            $dropdownHead = $dropdown.find('.js-dropdown-toggle'),
            activeCLass   = 'b-dropdown--active';

        $dropdown.on('click', function(e){
            e.stopPropagation();
        });

        $(document).on('click', function(e){
            $dropdown.removeClass(activeCLass)
        });

        $dropdownHead.on('click', function(){
            if ($dropdown.hasClass(activeCLass)) {
                $dropdown.removeClass(activeCLass)
            } else {
                $dropdown.addClass(activeCLass)
            }
        });
    });


});