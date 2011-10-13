/**
 * Wrapper to manage posts and feeds in Facebook
 * @author Hasin Hayder
 *
 */
(function() {
    LightBulb.groups = {
        
       getGroup:function(groupId,callback) {
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                   "access_token": accessToken
                  
                }
                FB.api("/" + groupId, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
       
       createStatuses:function(groupId,message,callback) {
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    //access_token: accessTokens,
                    message:message
                }
                FB.api("/" + groupId + "/feed", 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        
        createLinks : function (groupId,link,message,callback)
        {
             var userData = LightBulb._getFacebookData();
             var accessToken = userData.accessToken;
             if (accessToken) {
                 //LightBulb.links.create(groupId,link,message,callback);
                 var data = {
                    "access_token": accessToken,
                    link:link,
                    message:message
                }
                FB.api("/" + groupId + "/feed", 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
             
            }else {
                throw LIGHTBULB_NO_TOKEN;
            }
            
        },
        
        createPosts:function (groupId,message,link,picture,name,caption,description,actionName, actionLink,privacy)
        {
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                if (actionName != "" && actionLink != "") {
                    action = [{
                        name:actionName,
                        link:actionLink
                    }];
                }
                
                var data = {
                    //access_token: accessTokens,
                    message:message,
                    link:link,
                    picture:picture,
                    caption:caption,
                    description:description,
                    actions:actions,
                    privacy:privacy
                    
                }
                FB.api("/" + groupId + "/feed", 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
            
            
        }

        
    }
})();