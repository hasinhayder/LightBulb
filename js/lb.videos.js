/**
 * Video wrapper for Facebook
 *
 * @author Hasin Hayder
 */
(function($) {
    LightBulb.videos = {
        currentToken: "",
        /**
         * User must set the page token to retrieve videos from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken: function (token) {
            LightBulb.videos.currentToken = token;
            return true;
        },
        removeToken: function () {
            LightBulb.videos.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken: function () {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if (LightBulb.videos.currentToken) token = LightBulb.videos.currentToken;
            return token;
        },
        getVideos: function (parameters, callback) {
            var defaults = {
                userId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.videos.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.userId + "/videos", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getVideo: function (parameters, callback) {
            var defaults = {
                videoId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.videos.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.videoId + "", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getComments: function (parameters, callback) {
            var defaults = {
                videoId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.videos.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.videoId + "/comments", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        likeVideo: function (parameters, callback) {
            var defaults = {
                videoId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.statuses.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.videoId + "/likes", "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        dislikeVideo: function (parameters, callback) {
            var defaults = {
                videoId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.statuses.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.videoId + "/likes", "delete", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        createComment: function (parameters, callback) {
            var defaults = {
                videoId: "",
                message: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.statuses.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken,
                    message: params.message
                };
                FB.api("/" + params.videoId + "/comments", "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        addVideo: function (parameters, callback) {
            var defaults = {
                userId: "",
                source: "",
                title: "",
                description: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.videos.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken,
                    source: params.source,
                    title: params.title,
                    description: params.description,
                    source_id: params.userId
                };
                $.post("/helpers/videos.php", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }
    };
})(jQuery);