/**
 * Wrapper to manage posts and feeds in Facebook
 * @author Hasin Hayder
 *
 */
(function($) {
    LightBulb.groups = {
        
       getGroup: function (parameters,callback) {
            var defaults = {
                groupId: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                   access_token: accessToken
                };
                LightBulb.get("/" + params.groupId + "",data,callback);
                /*FB.api("/" + groupId, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
       
       createStatuses: function (parameters,callback) {
            var defaults = {
                groupId: "",
                message: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    //access_token: accessTokens,
                    message:params.message
                };
                LightBulb.post("/" + params.groupId + "/feed",data,callback);
                /*FB.api("/" + groupId + "/feed", "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        
        createLinks : function (parameters,callback) {
            var defaults = {
                groupId: "",
                link: "",
                message: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                //LightBulb.links.create(groupId,link,message,callback);
                var data = {
                    access_token: accessToken,
                    link: params.link,
                    message: params.message
                };
                LightBulb.post("/" + params.groupId + "/feed",data,callback);
                /*FB.api("/" + groupId + "/feed", "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });*/
             
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
            
        },
        
        createPosts: function (parameters,callback) {
            var defaults = {
                groupId: "",
                message: "",
                link: "",
                picture: "",
                name: "",
                caption: "",
                description: "",
                actionName: "", 
                actionLink: "",
                privacy: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                if (params.actionName !== "" && params.actionLink !== "") {
                    action = [{
                        name:params.actionName,
                        link:params.actionLink
                    }];
                }
                
                var data = {
                    //access_token: accessTokens,
                    message: params.message,
                    link: params.link,
                    picture: params.picture,
                    caption: params.caption,
                    description: params.description,
                    actions: actions,
                    privacy: params.privacy
                    
                };
                LightBulb.post("/" + params.groupId + "/feed",data,callback);
                /*FB.api("/" + groupId + "/feed", "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }
    };
})(jQuery);