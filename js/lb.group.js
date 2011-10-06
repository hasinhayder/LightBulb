/**
 *@author saidur rahman
 * Graph API to manage a Facebook group
 */
//CREATE A LINK, POST STATUS, MESSAGE in a group  

/*var LIGHTBULB_ALBUM_PRIVACY_EVERYONE = "EVERYONE";
var LIGHTBULB_ALBUM_PRIVACY_ALLFRIENDS = "ALL_FRIENDS";
var LIGHTBULB_ALBUM_PRIVACY_NETWORKS_FRIENDS = "NETWORKS_FRIENDS";
var LIGHTBULB_ALBUM_PRIVACY_FRIENDS_FRIENDS = "FRIENDS_OF_FRIENDS";
*/

(function() {
    LightBulb.group = {
        
        postStatus : function (groupId,message,callback)
        {
            var userData = $.LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            
            var userId = userData.facebookUserId;
            if (accessToken) {
                var eventData = {
                    "access_token": accessToken,
                    "message":message
                }
                FB.api("/" + groupId + "/feed", 'post', eventData, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                    //console.log(response);
                   
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
          
        },
        
        

        get:function(groupId, callback) {
            var userData = $.LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var eventData = {
                    "access_token": accessToken
                }
            } else {
                eventData = {};
            }
            FB.api("/" + albumId, 'post', eventData, function(response) {
                if (jQuery.isFunction(callback)) callback.call(this, response);
            });
        }
       
       
    }

})();