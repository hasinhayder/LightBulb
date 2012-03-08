/**
 * Manage statuses in Facebook.
 */
(function($) {
    LightBulb.statuses = {
        currentToken: "",
        /**
         * User must set the page token to retrieve statuses from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken: function (token) {
            LightBulb.statuses.currentToken = token;
            return true;
        },
        removeToken: function () {
            LightBulb.statuses.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken: function () {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if (LightBulb.statuses.currentToken) token = LightBulb.statuses.currentToken;
            return token;
        },
        getStatuses: function (parameters, callback) {
            var defaults = {
                userId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.statuses.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                var reqUrl = "/" + params.userId + "/statuses";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getStatus: function (parameters, callback) {
            var defaults = {
                statusId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.statuses.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                var reqUrl = "/" + params.statusId;

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getComments: function (parameters, callback) {
            var defaults = {
                statusId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.statuses.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                var reqUrl = "/" + params.statusId + "/comments";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getLikes: function (parameters, callback) {
            var defaults = {
                statusId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.statuses.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                var reqUrl = "/" + params.statusId + "/likes";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }
    };
})(jQuery);