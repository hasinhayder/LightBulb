/**
 * Wrapper to manage posts and feeds in Facebook
 * @author Hasin Hayder
 *
 */
(function() {
    LightBulb.posts = {
        create:function(to, from, name, caption, link, description, picture, video, actionName, actionLink, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var action = "";
                if (to == "") to = userId;
                if (from == "") from = userId
                if (actionName != "" && actionLink != "") {
                    action = [{
                        name:actionName,
                        link:actionLink
                    }];
                }
                var data = {
                    method: 'feed',
                    access_token:accessToken,
                    link: link,
                    picture: picture,
                    name: name,
                    caption: caption,
                    description: description,
                    to:to,
                    from:from,
                    source: video,
                    actions:action
                }
                FB.api("/" + to + "/feed", 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })
            }else{
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        get:function(postId, callback) {
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessTokens
                }
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
            FB.api("/" + postId, 'get', data, function(response) {
                if (jQuery.isFunction(callback)) callback.call(this, response);
            })
        },
        delete:function(postId, callback) {
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessTokens
                }
                FB.api("/" + postId, 'delete', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        like:function(postId, callback) {
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessTokens
                }
                FB.api("/" + postId + "/likes", 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        dislike:function(postId, callback) {
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessTokens
                }
                FB.api("/" + postId + "/likes", 'delete', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        postComment:function(postId,message,callback) {
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessTokens,
                    message:message
                }
                FB.api("/" + postId + "/comments", 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        deleteComment:function(commentId,callback) {
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessTokens
                }
                FB.api("/" + commentId, 'delete', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }
    }
})();