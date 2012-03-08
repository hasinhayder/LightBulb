/**
 * Wrapper to manage posts and feeds in Facebook
 * @author Hasin Hayder
 *
 */
(function($) {
    LightBulb.posts = {
        create: function (parameters, callback) {
            var defaults = {
                to: "",
                from: "",
                name: "",
                caption: "",
                link: "",
                description: "",
                picture: "",
                video: "",
                actionName: "",
                actionLink: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var action = "";
                if (params.to === "") params.to = userId;
                if (params.from === "") params.from = userId;
                if (params.actionName !== "" && params.actionLink !== "") {
                    action = [
                        {
                            name: params.actionName,
                            link: params.actionLink
                        }
                    ];
                }
                var data = {
                    method: "feed",
                    access_token: accessToken,
                    link: params.link,
                    picture: params.picture,
                    name: params.name,
                    caption: params.caption,
                    description: params.description,
                    to: params.to,
                    from: params.from,
                    source: params.video,
                    actions: action
                };
                FB.api("/" + params.to + "/feed", "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        get: function (parameters, callback) {
            var defaults = {
                postId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
            FB.api("/" + params.postId, "get", data, function (response) {
                if (jQuery.isFunction(callback)) callback.call(this, response);
            });
        },
        remove: function (parameters, callback) {
            var defaults = {
                postId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessTokens
                };
                FB.api("/" + params.postId, "delete", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        like: function (parameters, callback) {
            var defaults = {
                postId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessTokens
                };
                FB.api("/" + params.postId + "/likes", "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        dislike: function (parameters, callback) {
            var defaults = {
                postId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessTokens
                };
                FB.api("/" + params.postId + "/likes", "delete", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        postComment: function (parameters, callback) {
            var defaults = {
                postId: "",
                message: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessTokens,
                    message: params.message
                };
                FB.api("/" + params.postId + "/comments", "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        deleteComment: function (parameters, callback) {
            var defaults = {
                commentId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessTokens
                };
                FB.api("/" + params.commentId, "delete", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }
    };
})(jQuery);