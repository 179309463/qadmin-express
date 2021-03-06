/**
 * QAdmin v1.2.0 (http://www.qadmin.com/)
 * Copyright 2015-2017 QAdmin Team
 * Licensed under the QAdmin License 1.0 (http://www.qadmin.com/about/#license)
 */
(function(window, document, $){
    "use strict";

    $.components.register("labelauty", {
        mode: "default",
        defaults: {
            same_width: true,
            checked_label: "选中",
            unchecked_label: "未选中"
        }
    });
})(window, document, jQuery);