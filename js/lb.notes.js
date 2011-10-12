/**
 * Wrapper for managing notes
 *
 * @author Hasin Hayder
 */
(function(){
    LightBulb.notes = {
        currentToken:"",
        /**
         * Return notes from a particular user or a page or a group
         *
         * @author Hasin Hayder
         * @param userId Facebook user id or page id or group id
         * @param callback
         */
        getNotes:function(userId,callback){
            var accessToken = LightBulb.notes.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + userId + "/notes", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getNote:function(noteId,callback){
            var accessToken = LightBulb.notes.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + noteId , 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        /**
         * User must set the page token to retrieve notes from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken:function(token){
            LightBulb.notes.currentToken = token;
            return true;
        },
        removeToken:function(){
            LightBulb.notes.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken:function(){
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if(LightBulb.notes.currentToken) token=LightBulb.notes.currentToken;
            return token;
        },

        /**
         * Post a note to a user's wall, pages wall or a groups wall
         *
         * @author Hasin Hayder
         * @param userId
         * @param subject
         * @param message
         * @param callback
         */
        createNote:function(userId, subject,message,callback){
            var accessToken = LightBulb.notes.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken,
                    subject:subject,
                    message:message
                }
                FB.api("/" + pageId + "/notes", 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        getComments:function(noteId,callback){
            var accessToken = LightBulb.notes.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + noteId +"/comments", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        likeNote:function(noteId,callback){
            var accessToken = LightBulb.notes.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + noteId +"/likes" , 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        dislikeNote:function(noteId,callback){
            var accessToken = LightBulb.notes.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + noteId +"/likes" , 'delete', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        createComment:function(noteId,message,callback){
            var accessToken = LightBulb.notes.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken,
                    message:message
                }
                FB.api("/" + noteId +"/comments" , 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
    }
})();