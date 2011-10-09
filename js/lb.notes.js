/**
 * Wrapper for managing notes
 *
 * @author Hasin Hayder
 */
(function(){
    LightBulb.notes = {
        currentToken:"",
        getNotes:function(userId,callback){
            var accessToken = LightBulb.notes.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + pageId + "/notes", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        setToken:function(token){
            LightBulb.notes.currentToken = token;
            return true;
        },
        removeToken:function(){
            LightBulb.notes.currentToken = "";
        },
        getToken:function(){
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if(LightBulb.notes.currentToken) token=LightBulb.notes.currentToken;
            return token;
        },
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
        }
    }
})();