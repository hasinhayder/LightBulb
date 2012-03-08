/**
 * @author Hasin Hayder
 * Wrap all methods from Fb.ui of the JS-SDK to automate interacting with users
 */
(function($) {
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
        publishFeed: function (parameters, callback) {
            var defaults = {
                to: "",
                from: "",
                name: "", 
                caption: "",
                link: "",
                description: "", 
                picture: "", 
                video: "",
                redirectUrl: "",
                actionName: "", 
                actionLink: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var action = "";
                if (params.to === "") params.to = userId;
                if (params.from === "") params.from = userId;
                if (params.actionName !== "" && params.actionLink !== "") {
                    action = [{
                        name: params.actionName,
                        link: params.actionLink
                    }];
                }
                if (!params.redirectUrl) params.redirectUrl="http://facebook.com";
                var data = {
                    method: "feed",
                    link: params.link,
                    picture: params.picture,
                    name: params.name,
                    caption: params.caption,
                    description: params.description,
                    to: params.to,
                    from: params.from,
                    source: params.video,
                    actions: action,
                    redirect_uri: params.redirectUrl
                };
                FB.ui(data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
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
        publishFeedBackground: function (parameters, callback) {
            var defaults = {
                to: "",
                from: "",
                name: "", 
                caption: "",
                link: "",
                description: "", 
                picture: "",
                video: "",
                actionName: "", 
                actionLink: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var action = "";
                if (params.to === "") params.to = userId;
                if (params.from === "") params.from = userId;
                if (params.actionName !== "" && params.actionLink !== "") {
                    action = [{
                        name: params.actionName,
                        link: params.actionLink
                    }];
                }
                var data = {
                    method: "feed",
                    link: params.link,
                    picture: params.picture,
                    name: params.name,
                    caption: params.caption,
                    description: params.description,
                    to: params.to,
                    from: params.from,
                    source: params.video,
                    actions: action
                };
                LightBulb.post("/" + params.to + "/feed",data,callback);
                /*FB.api("/" + to + "/feed", "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })*/
            } else {
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
        makeRequestToOneFriend: function (parameters,callback) {
            var defaults = {
                friendId: "",
                message: "",
                title: "",
                data: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var data = {
                    method: "apprequests",
                    to: params.friendId,
                    message: params.message,
                    title: params.title,
                    data: params.data
                };
                FB.ui(data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
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
        makeRequestToMultipleFriends: function (parameters, callback) {
            var defaults = {
                message: "",
                title: "",
                filters: "",
                excludedFriends: "", 
                maxRecipients: "",
                data: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                if (params.maxRecipients === "") params.maxRecipients=20;
                var data = {
                    method: "apprequests",
                    filters: params.filters,
                    exclude_ids: params.excludedFriends,
                    message: params.message,
                    title: params.title,
                    max_recipients: params.maxRecipients,
                    data: params.data
                };
                FB.ui(data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        /**
         * Prompt a make friend dialog
         * @author Hasin Hayder
         * @param friendId Facebook user id of username
         * @param redirectUrl Url to redirect after user clicks a button
         */
        makeFriend: function (parameters, callback) {
            var defaults = {
                id: "",
                redirect_url: "http://www.facebook.com/"

            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var data = {
                    method: "friends",
                    id: params.friendId,
                    redirect_url: params.redirectUrl
                };
                FB.ui(data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
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
        sendMessage: function (parameters, callback) {
            var defaults = {
                friendId: "",
                link: "", 
                message: "",
                picture: "", 
                title: "", 
                redirectUrl: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var data = {
                    method: "send",
                    to: params.friendId,
                    link: params.link,
                    description: params.message,
                    picture: params.picture,
                    redirect_url: params.redirectUrl,
                    name: params.title
                };
                FB.ui(data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }
    };
})(jQuery);