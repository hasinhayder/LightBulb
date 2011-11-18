/**
 * Wrapper for Applications Object
 * @author Hasin Hayder
 */

(function(){
    LightBulb.applications = {
        currentToken:"",
        appToken:"",
        /**
         * User must set the page token to retrieve applications from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken:function(token) {
            LightBulb.applications.currentToken = token;
            return true;
        },
        removeToken:function() {
            LightBulb.applications.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken:function() {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if (LightBulb.applications.currentToken) token = LightBulb.applications.currentToken;
            return token;
        },
        getApplication: function(appId,callback){
            var accessToken = LightBulb.applications.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + appId + "", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getTestUsers: function(appId,callback){
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken
                }
                LightBulb.get("/" + appId + "/accounts/test-users",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        fetchAppToken:function(appId,appSecret,callback){
            var accessToken = LightBulb.applications.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken,
                    appid:appId,
                    secret:appSecret
                }
                //LightBulb.get("/oauth/access_token?client_id=" + appId + "&client_secret="+appSecret+"&grant_type=client_credentials&http%3A%2F%2Ffacebook.com",data,callback);
                $.post("/helpers/app.php",data,callback);
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getAppToken:function(){
            if(LightBulb.applications.appToken)
                return LightBulb.applications.appToken;
            return false;
        },
        setAppToken:function(token){
            LightBulb.applications.appToken=token;
        },
        createTestUser:function(name,permissions,callback){
           var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken,
                    name:name,
                    installed:true,
                    permissions:permissions
                }
                LightBulb.post("/" + appId + "/accounts/test-users",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        addTestUser:function(testUserId,permissions,ownerAppToken,callback){
           var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken,
                    uid:testUserId,
                    owner_access_token:ownerAppToken,
                    installed:true,
                    permissions:permissions
                }
                LightBulb.post("/" + appId + "/accounts/test-users",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getTestUser:function(testUserId,callback){
           var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken
                }
                LightBulb.get("/" + appId + "/accounts/test-users/"+testUserId,data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        makeTestUsersFriendRequest:function(testUserId1,testuserId2,callback){
           var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken
                }
                LightBulb.post("/" + testUserId1 + "/friends/"+testUserId2,data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        updateTestUser:function(testUserId,name, password,callback){
           var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken,
                    name:name,
                    password:password
                }
                LightBulb.post("/" + testUserId + "",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        deleteTestUser:function(testUserId,callback){
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken,
                }
                LightBulb.delete("/" + testUserId + "",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getBannedUsers:function(appId,callback){
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken
                }
                LightBulb.get("/" + appId + "/banned",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        isBanned:function(appId,userId,callback){
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken
                }
                LightBulb.get("/" + appId + "/banned/"+userId,data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        banUsers:function(appId,users,callback){
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken
                }
                busers = users.join(",");
                LightBulb.post("/" + appId + "/banned?uid="+busers,data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        unBanUsers:function(appId,userId,callback){
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken
                }
                busers = users.join(",");
                LightBulb.delete("/" + appId + "/banned/"+userId,data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getInsights:function(appId,callback){
            /*Must need read_insights permission*/
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken
                }
                LightBulb.get("/" + appId + "/insights",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getPayments:function(appId,callback){
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken
                }
                LightBulb.get("/" + appId + "/payments",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getReviews:function(appId,callback){
            var appAccessToken = LightBulb.applications.getToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken
                }
                LightBulb.get("/" + appId + "/reviews",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getStaticResources:function(appId,callback){
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken
                }
                LightBulb.get("/" + appId + "/staticresources",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getSubscriptions:function(appId,callback){
            //http://developers.facebook.com/docs/reference/api/realtime/
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken
                }
                LightBulb.get("/" + appId + "/subscriptions",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        createSubscription:function(appId,object, fields,callbackUrl,verifyToken,callback){
            //http://developers.facebook.com/docs/reference/api/realtime/
            /*Object to monitor - `user`, `permissions`, or `page`. If no object is specified all subscriptions are deleted. */
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken,
                    object:object,
                    fields:fields,
                    callback_url:callbackUrl,
                    verify_token:verifyToken
                }
                LightBulb.post("/" + appId + "/subscriptions",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        deleteSubscription:function(appId,object,callback){
            /*Object to monitor - `user`, `permissions`, or `page`. If no object is specified all subscriptions are deleted. */
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken,
                    object:object
                }
                LightBulb.delete("/" + appId + "/translations",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getTags:function(appId,callback){
            var appAccessToken = LightBulb.applications.getToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken
                }
                LightBulb.get("/" + appId + "/tagged",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getTranslations:function(appId,callback){
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken
                }
                LightBulb.get("/" + appId + "/translations",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        createTranslation:function(appId,nativeStrings,callback){
            /*native_strings is a JSON-encoded array of strings to translate. Each element of the string array is an object, with text storing the actual string, description storing the description of the text. */
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken,
                    native_strings:nativeStrings
                }
                LightBulb.post("/" + appId + "/translations",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        deleteTranslations:function(appId,nativeHashes,callback){
            /*native_hashes is a An array of native hashes. The native hash is a unique identifier of the native string and a description and is generated by the Translations application.  */
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken,
                    native_hashes:nativeHashes
                }
                LightBulb.delete("/" + appId + "/translations",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getScores:function(appId,callback){
            /*Must need read_insights permission*/
            var appAccessToken = LightBulb.applications.getToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken
                }
                LightBulb.get("/" + appId + "/scores",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        deleteScores:function(appId,callback){
            /*Must need read_insights permission*/
            var appAccessToken = LightBulb.applications.getToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken
                }
                LightBulb.delete("/" + appId + "/scores",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getAchievements:function(appId,callback){
            /*Must need read_insights permission*/
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken
                }
                LightBulb.get("/" + appId + "/achievements",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        createAchievement:function(appId,achievement,displayOrder,callback){
            /*Must need read_insights permission*/
            var appAccessToken = LightBulb.applications.getToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken,
                    achievement:achievement,
                    display_order:displayOrder
                }
                LightBulb.post("/" + appId + "/achievements",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        deleteAchievement:function(appId,achievement,callback){
            /*Must need read_insights permission*/
            var appAccessToken = LightBulb.applications.getToken();
            if (appAccessToken) {
                var data = {
                    "access_token": appAccessToken,
                    achievement:achievement
                }
                LightBulb.delete("/" + appId + "/achievements",data,callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        }
    }
})();