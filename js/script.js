!(function () {
    'use strict';
    $(document).ready(function () {
        var heightDefault = $('#header').position().top;
        AOS.init({
            duration: 1200
        });

        function offSetManager(){
            var height, currYOffSet, $header;
            $header = $('#header');
            currYOffSet = window.pageYOffset;
            height = Math.max($header.position().top, heightDefault) - 15;
            if(height < currYOffSet) {
                $header.addClass('fixed').addClass('fixed-theme');
            } else {
                $header.removeClass('fixed').removeClass('fixed-theme');
            }
        }
        window.onscroll = function(e) {
            offSetManager();
        };
        offSetManager();
    });
}());
