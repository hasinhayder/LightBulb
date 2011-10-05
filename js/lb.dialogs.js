/**
 * Wrap all methods from Fb.ui of the JS-SDK to automate interacting with users
 */
(function() {
    LightBulb.dialogs = {
        publishFeed:function(to, from, name, caption, link, description, picture, video, actionName, actionLink, callback) {
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var action = {}
                if (to == "") to = "me";
                if (from == "") from = "me"
                if (actionName != "" && actionLink != "") {
                    action = {
                        name:actionName,
                        link:actionLink
                    }
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
        publishFeedBackground:function() {

        }
    }
})();