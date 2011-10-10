/**
 * Wrapper for Photos in Facebook
 *
 * @author Hasin Hayder
 */

(function() {
    LightBulb.photos = {
        currentToken:"",
        /**
         * User must set the page token to retrieve notes from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken:function(token) {
            LightBulb.photos.currentToken = token;
            return true;
        },
        removeToken:function() {
            LightBulb.photos.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken:function() {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if (LightBulb.photos.currentToken) token = LightBulb.photos.currentToken;
            return token;
        },
        getPhoto:function(photoId,callback){
            var accessToken = LightBulb.photos.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + photoId , 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getComments:function(photoId,callback){
            var accessToken = LightBulb.photos.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + photoId+"/comments" , 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getLikes:function(photoId,callback){
            var accessToken = LightBulb.photos.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + photoId+"/likes" , 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getTags:function(photoId,callback){
            var accessToken = LightBulb.photos.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + photoId+"/tags" , 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getPicture:function(photoId){
            return "http://graph.facebook.com/"+photoId+"/picture";
        },
        postComment:function(photoId,message,callback){
            var accessToken = LightBulb.photos.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken,
                    message: message
                }
                FB.api("/" + photoId+"/comments" , 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        likePhoto:function(photoId,callback){
            var accessToken = LightBulb.photos.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + photoId+"/likes" , 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        dislikePhoto:function(photoId,callback){
            var accessToken = LightBulb.photos.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + photoId+"/likes" , 'delete', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        createTag:function(photoId,userId,x,y,callback){
            var accessToken = LightBulb.photos.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken,
                    to:userId,
                    x:x,
                    y:y
                }
                FB.api("/" + photoId+"/tags/"+userId , 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        updateTag:function(photoId,userId,x,y,callback){
            var accessToken = LightBulb.photos.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken,
                    to:userId,
                    x:x,
                    y:y
                }
                FB.api("/" + photoId+"/tags/"+userId , 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }

    }
})();