/**
 * Wrapper for managing friendlists
 *
 * @author M A Hossain Tonu
 */
(function(){
    LightBulb.friendlists = {
        currentToken:"",

        getFriendList:function(friendlistId,callback){
            var accessToken = LightBulb.friendlists.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + friendlistId , 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        
        getMembers:function(friendlistId,callback){
            var accessToken = LightBulb.friendlists.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + friendlistId+'/members' , 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        /**
         * User must set the page token to retrieve friendlists from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken:function(token){
            LightBulb.friendlists.currentToken = token;
            return true;
        },
        removeToken:function(){
            LightBulb.friendlists.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken:function(){
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if(LightBulb.friendlists.currentToken) token=LightBulb.friendlists.currentToken;
            return token;
        },

        create:function(userId, name, callback){
            var accessToken = LightBulb.friendlists.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken,
                    "name" : name
                }
                FB.api("/" + userId + "/friendlists", 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        
        deleteFriendList:function(friendlistId, callback){
            var accessToken = LightBulb.friendlists.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + friendlistId , 'delete', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        createMember:function(friendlistId, userId, callback){
            var accessToken = LightBulb.friendlists.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + friendlistId+"/members/"+userId, 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        deleteMember:function(friendlistId, userId, callback){
            var accessToken = LightBulb.friendlists.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + friendlistId+"/members/"+userId, 'delete', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }

    }
})();