/**
 * Wrapper for managing subscriptions
 *
 * @author M A Hossain Tonu
 */
(function($) {
    LightBulb.subscriptions = {
        currentToken: "",

        getSubscription: function (parameters, callback) {
            var defaults = {
                applicationId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.subscriptions.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.applicationId + "/subscriptions", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        /**
         * User must set the page token to retrieve subscriptions from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken: function (token) {
            LightBulb.subscriptions.currentToken = token;
            return true;
        },
        removeToken: function () {
            LightBulb.subscriptions.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken: function () {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if (LightBulb.subscriptions.currentToken) token = LightBulb.subscriptions.currentToken;
            return token;
        }
    };
})(jQuery);