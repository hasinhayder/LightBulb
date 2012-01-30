/*
 * Utility functions which cannot be categorized in any other category
 */
(function ($) {
    LightBulb.utility = {
        currentToken:"",
        /**
         * User must set the page token to retrieve utility from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken:function (token) {
            LightBulb.utility.currentToken = token;
            return true;
        },
        removeToken:function () {
            LightBulb.utility.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken:function () {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if (LightBulb.utility.currentToken) token = LightBulb.utility.currentToken;
            return token;
        },
        runFQL:function (parameters, callback) {
            var defaults = {
                fql:""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.utility.getToken();
            if (accessToken && params.fql) {
                var data = {
                    access_token:accessToken,
                    q:params.fql
                };
                FB.api("/fql" , "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }
    };
})(jQuery);