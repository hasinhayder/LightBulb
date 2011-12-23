/**
 * Wrapper for managing comments
 *
 * @author M A Hossain Tonu
 */
(function($) {
    LightBulb.comments = {
        currentToken: "",
        
        getComment: function (parameters,callback) {
            
            var defaults = {
                commentId: ""
            };
            var params = $.extend(defaults,parameters);var accessToken = LightBulb.comments.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.commentId , "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getLikes: function (parameters,callback) {
            var defaults = {
                commentId: ""
            };
            var params = $.extend(defaults,parameters);
            var accessToken = LightBulb.comments.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.commentId+"/likes" , "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        /**
         * User must set the page token to retrieve comments from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken: function (token) {
            LightBulb.comments.currentToken = token;
            return true;
        },
        removeToken: function () {
            LightBulb.comments.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken: function () {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if(LightBulb.comments.currentToken) token = LightBulb.comments.currentToken;
            return token;
        },
        
        deleteComment: function (parameters, callback) {
            var defaults = {
                commentId: ""
            };
            var params = $.extend(defaults,parameters);
            var accessToken = LightBulb.comments.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.commentId , "delete", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        like: function (parameters, callback) {
            var defaults = {
                commentId: ""
            };
            var params = $.extend(defaults,parameters);
            var accessToken = LightBulb.comments.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.commentId + "/likes", "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        dislike: function (parameters, callback) {
            var defaults = {
                commentId: ""
            };
            var params = $.extend(defaults,parameters);
            var accessToken = LightBulb.comments.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.commentId + "/likes", "delete", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }
    };
})(jQuery);