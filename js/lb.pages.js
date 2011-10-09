/**
 * Wrapper for managing pages
 *
 * @author Hasin Hayder
 */
var PAGE_SETTINGS_USERS_CAN_POST="USERS_CAN_POST";
var PAGE_SETTINGS_USERS_CAN_POST_PHOTOS="USERS_CAN_POST_PHOTOS";
var PAGE_SETTINGS_USERS_CAN_TAG_PHOTOS="USERS_CAN_TAG_PHOTOS";
var PAGE_SETTINGS_USERS_CAN_POST_VIDEOS="USERS_CAN_POST_VIDEOS";
(function(){
    LightBulb.pages = {
        pages:{},
        currentToken:"",
        getPages:function(userId,callback){
            if(userId="") userId="me";
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + userId + "/accounts", 'get', data, function(response) {
                    LightBulb.pages.pages = response.data;
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        setToken:function(token){
            LightBulb.pages.currentToken = token;
            return true;
        },
        removeToken:function(){
            LightBulb.pages.currentToken = "";
        },
        getPage:function(pageId,returnToken,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+pageId;
                if (returnToken)
                    reqUrl += "?fields=id,name,link,category,location,phone,checkins,access_token,picture";
                else
                    reqUrl += "?fields=id,name,link,category,location,phone,checkins,picture";
                FB.api(reqUrl, 'get', data, function(response) {
                    LightBulb.pages.pages = response.data;
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getFeeds:function(pageId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + pageId + "/feeds", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getSettings:function(pageId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken ) {
                var data = {
                    "access_token":LightBulb.pages.currentToken 
                }
                FB.api("/" + pageId + "/settings", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        updateSettings:function(pageId,settingsName,settingsValue,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken ) {
                var data = {
                    "access_token":LightBulb.pages.currentToken,
                    setting:settingsName,
                    value:settingsValue
                }
                FB.api("/" + pageId + "/settings", 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        getLinks:function(pageId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + pageId + "/links", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getPhotos:function(pageId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + pageId + "/photos", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getGroups:function(pageId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + pageId + "/groups", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getAlbums:function(pageId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + pageId + "/albums", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getStatuses:function(pageId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + pageId + "/statuses", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getVideos:function(pageId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + pageId + "/videos", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getNotes:function(pageId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
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
        getPosts:function(pageId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + pageId + "/posts", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getEvents:function(pageId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + pageId + "/events", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getAdmins:function(pageId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    "access_token": LightBulb.pages.currentToken
                }
                FB.api("/" + pageId + "/admins", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        getBlockedUsers:function(pageId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    "access_token": LightBulb.pages.currentToken
                }
                FB.api("/" + pageId + "/blocked", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        getTabs:function(pageId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    "access_token": LightBulb.pages.currentToken
                }
                FB.api("/" + pageId + "/tabs", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        createTab:function(pageId,applicationId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    "access_token": LightBulb.pages.currentToken,
                    "app_id":applicationId
                }
                FB.api("/" + pageId + "/tabs", 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        updateTab:function(pageId,tabId,position,customName,isDefault,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    "access_token": LightBulb.pages.currentToken
                };
                if(position) data.position = position;
                if(customName) data.custom_name = customName;
                if(isDefault) data.is_non_connection_landing_tab = true;
                FB.api("/" + pageId + "/tabs/"+tabId, 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        deletTab:function(pageId,tabId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    "access_token": LightBulb.pages.currentToken
                }
                FB.api("/" + pageId + "/tabs/"+tabId, 'delete', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        isAdmin:function(pageId,userId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    "access_token": LightBulb.pages.currentToken
                }
                FB.api("/" + pageId + "/admins/"+userId, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        isBlocked:function(pageId,userId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    "access_token": LightBulb.pages.currentToken
                }
                FB.api("/" + pageId + "/blocked/"+userId, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        blockUsers:function(pageId,users,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    "access_token": LightBulb.pages.currentToken,
                    "uid": users.join(",")
                }
                FB.api("/" + pageId + "/blocked/", 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        unblockUsers:function(pageId,userId,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    "access_token": LightBulb.pages.currentToken,
                    "uid": userId
                }
                FB.api("/" + pageId + "/blocked/", 'delete', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        }
    }
})();