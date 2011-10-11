/**
 * Wrapper for managing comments
 *
 * @author M A Hossain Tonu
 */
(function(){
    LightBulb.comments = {
        currentToken:"",
        
        getComment:function(commentId,callback){
            var accessToken = LightBulb.comments.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + commentId , 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getLikes:function(commentId,callback){
            var accessToken = LightBulb.comments.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + commentId+"/likes" , 'get', data, function(response) {
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
        setToken:function(token){
            LightBulb.comments.currentToken = token;
            return true;
        },
        removeToken:function(){
            LightBulb.comments.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken:function(){
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if(LightBulb.comments.currentToken) token=LightBulb.comments.currentToken;
            return token;
        },
        
        deleteComment:function(commentId, callback){
            var accessToken = LightBulb.comments.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + commentId , 'delete', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        like:function(commentId, callback){
            var accessToken = LightBulb.comments.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + commentId + "/likes", 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        unlike:function(commentId, callback){
            var accessToken = LightBulb.comments.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + commentId + "/likes", 'delete', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }
    }
})();