/**
 * Wrapper for managing links
 *
 * @author M A Hossain Tonu
 */
(function($) {
    LightBulb.links = {
        currentToken: "",
        /**
         * Return links from a particular user or a page or a group
         *
         * @author M A hossain Tonu
         * @param userId Facebook user id or page id or group id
         * @param callback
         */
        getLinks: function (parameters,callback) {
            var defaults = {
                userId: ""
            };
            var params = $.extend(defaults,parameters);
            var accessToken = LightBulb.links.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.userId + "/links", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getLink: function (parameters,callback) {
            var defaults = {
                linkId: ""
            };
            var params = $.extend(defaults,parameters);
            var accessToken = LightBulb.links.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.linkId , "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getComments: function (parameters,callback) {
            var defaults = {
                linkId: ""
            };
            var params = $.extend(defaults,parameters);
            var accessToken = LightBulb.links.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.linkId+"/comments" , "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getLikes: function (parameters,callback) {
            var defaults = {
                linkId: ""
            };
            var params = $.extend(defaults,parameters);
            var accessToken = LightBulb.links.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.linkId+"/likes" , "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        /**
         * User must set the page token to retrieve links from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken: function (token) {
            LightBulb.links.currentToken = token;
            return true;
        },
        removeToken: function () {
            LightBulb.links.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken: function () {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if(LightBulb.links.currentToken) token = LightBulb.links.currentToken;
            return token;
        },

        /**
         * Post a link to a user's wall, pages wall or a groups wall
         *
         * @author M A Hossain Tonu
         * @param userId
         * @param link
         * @param message
         * @param callback
         */
        create: function (parameters, callback) {
            var defaults = {
                userId: "",
                link: "",
                message: ""
            };
            var params = $.extend(defaults,parameters);
            var accessToken = LightBulb.links.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken,
                    link: params.link,
                    message: params.message
                };
                FB.api("/" + params.userId + "/feed", "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        comment: function (parameters, callback) {
            var defaults = {
                linkId: "",
                message: ""
            };
            var params = $.extend(defaults,parameters);
            var accessToken = LightBulb.links.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken,
                    message: params.message
                };
                FB.api("/" + params.linkId + "/comments", "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        like: function (parameters, callback) {
            var defaults = {
                linkId: ""
            };
            var params = $.extend(defaults,parameters);
            var accessToken = LightBulb.links.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.linkId + "/likes", "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        unlike: function (parameters, callback) {
            var defaults = {
                linkId: ""
            };
            var params = $.extend(defaults,parameters);
            var accessToken = LightBulb.links.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.linkId + "/likes", "delete", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }
    };
})(jQuery);