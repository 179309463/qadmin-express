/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function(window, document, $){
    "use strict";

    $.components.register("owlCarousel", {
        mode: "default",
        defaults: {
            loop: true,
            nav: true,
            dots: false,
            dotsClass: "owl-dots owl-dots-fall",
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                }
            }
        }
    });
})(window, document, jQuery);