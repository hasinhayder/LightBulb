/**
 * Wrapper for managing reviews
 *
 * @author M A Hossain Tonu
 */
(function($) {
    LightBulb.reviews = {
        currentToken: "",

        getReviews: function (parameters,callback) {
            var defaults = {
                applicationId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.reviews.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.applicationId + "/reviews", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        /**
         * User must set the page token to retrieve reviews from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken: function (token) {
            LightBulb.reviews.currentToken = token;
            return true;
        },
        removeToken: function () {
            LightBulb.reviews.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken: function () {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if(LightBulb.reviews.currentToken) token = LightBulb.reviews.currentToken;
            return token;
        }
    };
})(jQuery);