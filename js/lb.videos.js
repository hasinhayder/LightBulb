/**
 * Video wrapper for Facebook
 *
 * @author Hasin Hayder
 */
(function() {
    LightBulb.videos = {
        /**
         * User must set the page token to retrieve videos from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken:function(token) {
            LightBulb.videos.currentToken = token;
            return true;
        },
        removeToken:function() {
            LightBulb.videos.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken:function() {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if (LightBulb.videos.currentToken) token = LightBulb.videos.currentToken;
            return token;
        },
        getVideos:function(userId) {
            var accessToken = LightBulb.videos.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + userId + "/videos", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getVideo:function(videoId) {
            var accessToken = LightBulb.videos.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + videoId + "", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getComments:function(videoId, callback) {
            var accessToken = LightBulb.videos.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + videoId + "/comments", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        likeNote:function(videoId, callback) {
            var accessToken = LightBulb.videos.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + videoId + "/likes", 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        dislikeNote:function(videoId, callback) {
            var accessToken = LightBulb.videos.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + videoId + "/likes", 'delete', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        createComment:function(videoId, message, callback) {
            var accessToken = LightBulb.videos.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken,
                    message:message
                }
                FB.api("/" + videoId + "/comments", 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        addVideo:function(userId, source, title,description,callback) {
            var accessToken = LightBulb.videos.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken,
                    "source":source,
                    "title":title,
                    "description":description,
                    "source_id":albumId
                }
                $.post("/helpers/videos.php", data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }

        }
    }
})