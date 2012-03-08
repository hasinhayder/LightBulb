/**
 * Wrapper for Photos in Facebook
 *
 * @author Hasin Hayder
 */

(function($) {
    LightBulb.photos = {
        currentToken: "",
        /**
         * User must set the page token to retrieve notes from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken: function (token) {
            LightBulb.photos.currentToken = token;
            return true;
        },
        removeToken: function () {
            LightBulb.photos.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken: function () {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if (LightBulb.photos.currentToken) token = LightBulb.photos.currentToken;
            return token;
        },
        getPhoto: function (parameters,callback) {
            var defaults = {
                photoId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.photos.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.photoId , "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getComments: function (parameters,callback) {
            var defaults = {
                photoId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.photos.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.photoId+"/comments" , "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getLikes: function (parameters,callback) {
            var defaults = {
                photoId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.photos.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.photoId+"/likes" , "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getTags: function (parameters,callback) {
            var defaults = {
                photoId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.photos.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.photoId+"/tags" , "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getPicture: function (photoId) {
            var defaults = {
                photoId: ""
            };
            var params = $.extend(defaults, parameters);
            return "http://graph.facebook.com/" + params.photoId + "/picture";
        },
        postComment: function (parameters,callback) {
            var defaults = {
                photoId: "",
                message: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.photos.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken,
                    message: params.message
                };
                FB.api("/" + params.photoId + "/comments" , "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        likePhoto: function (parameters,callback) {
            var defaults = {
                photoId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.photos.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.photoId+"/likes" , "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        dislikePhoto: function (parameters,callback) {
            var defaults = {
                photoId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.photos.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.photoId+"/likes" , "delete", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        createTag: function (parameters,callback) {
            var defaults = {
                photoId: "",
                userId: "",
                x: "",
                y: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.photos.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken,
                    to: params.userId,
                    x: params.x,
                    y: params.y
                };
                FB.api("/" + params.photoId+"/tags/"+params.userId , "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        updateTag: function (parameters,callback) {
            var defaults = {
                photoId: "",
                userId: "",
                x: "",
                y: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.photos.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken,
                    to: params.userId,
                    x: params.x,
                    y: params.y
                };
                FB.api("/" + params.photoId+"/tags/"+params.userId , "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }
    };
})(jQuery);