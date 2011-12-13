/**
 * @author Hasin Hayder
 * Wrap all methods from Fb.ui of the JS-SDK to automate interacting with users
 */
(function() {
    LightBulb.dialogs = {
        /**
         * Prompt a publish feed dialog to the currently logged in user
         * @author Hasin Hayder
         * @param to Facebook User/Page id on whos wall this feed is going to publish
         * @param from Facebook User/Page id - the creator of the feed
         * @param name Name of the feed
         * @param caption Caption of the feed
         * @param link Link of the feed
         * @param description Description of the feed
         * @param picture http based URL of the external picture
         * @param video  http based URL of swf or flv files
         * @param actionName Name of the action, optional
         * @param actionLink Link of the action, optional
         * @param callback
         */
        publishFeed:function(to, from, name, caption, link, description, picture, video, redirectUrl,actionName, actionLink, callback) {
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var action = "";
                if (to == "") to = userId;
                if (from == "") from = userId
                if (actionName != "" && actionLink != "") {
                    action = [{
                        name:actionName,
                        link:actionLink
                    }];
                }
                if(!redirectUrl) redirectUrl="http://facebook.com";
                var data = {
                    method: 'feed',
                    link: link,
                    picture: picture,
                    name: name,
                    caption: caption,
                    description: description,
                    to:to,
                    from:from,
                    source: video,
                    actions:action,
                    redirect_uri:redirectUrl
                }
                FB.ui(data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            }else{
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        /**
         * Publish feed directly, without any user interaction
         * @author Hasin Hayder
         * @param to Facebook User/Page id on whos wall this feed is going to publish
         * @param from Facebook User/Page id - the creator of the feed
         * @param name Name of the feed
         * @param caption Caption of the feed
         * @param link Link of the feed
         * @param description Description of the feed
         * @param picture http based URL of the external picture
         * @param video  http based URL of swf or flv files
         * @param actionName Name of the action, optional
         * @param actionLink Link of the action, optional
         * @param callback
         */
        publishFeedBackground:function(to, from, name, caption, link, description, picture, video, actionName, actionLink, callback) {
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var action = "";
                if (to == "") to = userId;
                if (from == "") from = userId
                if (actionName != "" && actionLink != "") {
                    action = [{
                        name:actionName,
                        link:actionLink
                    }];
                }
                var data = {
                    method: 'feed',
                    link: link,
                    picture: picture,
                    name: name,
                    caption: caption,
                    description: description,
                    to:to,
                    from:from,
                    source: video,
                    actions:action
                }
                LightBulb.post("/" + to + "/feed",data,callback);
                /*FB.api("/" + to + "/feed", 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })*/
            }else{
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        /**
         * Send application request to one friend
         * @author Hasin Hayder
         * @param friendId
         * @param message
         * @param title
         * @param data
         * @param callback
         */
        makeRequestToOneFriend:function(friendId,message,title,data,callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var data = {
                    method: 'apprequests',
                    to: friendId,
                    message:message,
                    title:title,
                    data:data
                }
                FB.ui(data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            }else{
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        /**
         * Send application request to multiple friends
         * @author Hasin Hayder
         * @param message
         * @param title
         * @param filters
         * @param excludedFriends
         * @param maxRecipients
         * @param data
         * @param callback
         */
        makeRequestToMultipleFriends:function(message,title,filters,excludedFriends, maxRecipients,data, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                if(maxRecipients=="") maxRecipients=20;
                var data = {
                    method: 'apprequests',
                    filters: filters,
                    exclude_ids:excludedFriends,
                    message:message,
                    title:title,
                    max_recipients:maxRecipients,
                    data:data
                }
                FB.ui(data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            }else{
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        /**
         * Prompt a make friend dialog
         * @author Hasin Hayder
         * @param friendId Facebook user id of username
         * @param redirectUrl Url to redirect after user clicks a button
         */
        makeFriend:function(friendId,redirectUrl){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var data = {
                    method: 'friends',
                    id: friendId,
                    redirect_url: redirectUrl
                }
                FB.ui(data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            }else{
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        /**
         * Prompt a send message dialog to currently logged in user
         * @author Hasin Hayder
         * @param friendId
         * @param link
         * @param message
         * @param picture
         * @param title
         * @param redirectUrl
         * @param callback
         */
        sendMessage:function(friendId, link, message, picture, title, redirectUrl, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var data = {
                    method: 'send',
                    to: friendId,
                    link:link,
                    description:message,
                    picture:picture,
                    redirect_url: redirectUrl,
                    name:title
                }
                FB.ui(data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            }else{
                throw LIGHTBULB_NO_TOKEN;
            }
        }
        
    }
})();