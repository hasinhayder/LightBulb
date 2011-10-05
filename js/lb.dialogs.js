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
        publishFeed:function(to, from, name, caption, link, description, picture, video, actionName, actionLink, callback) {
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
                    }]
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
                    }]
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
                FB.api("/" + to + "/feed", 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })
            }else{
                throw LIGHTBULB_NO_TOKEN;
            }
        }
    }
})();