/**
 * Wrapper for managing friendlists
 *
 * @author M A Hossain Tonu
 */
(function($) {
    LightBulb.friendlists = {
        currentToken: "",

        getFriendList: function (parameters,callback) {
            var defaults = {
                friendlistId: ""
            };
            var params = $.extend(defaults,parameters);
            var accessToken = LightBulb.friendlists.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.friendlistId , "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        
        getMembers: function (parameters,callback) {
            var defaults = {
                friendlistId: ""
            };
            var params = $.extend(defaults,parameters);
            var accessToken = LightBulb.friendlists.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.friendlistId+'/members' , "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        /**
         * User must set the page token to retrieve friendlists from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken: function (token) {
            LightBulb.friendlists.currentToken = token;
            return true;
        },
        removeToken: function () {
            LightBulb.friendlists.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken: function () {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if (LightBulb.friendlists.currentToken) token=LightBulb.friendlists.currentToken;
            return token;
        },

        create: function (parameters, callback) {
            var defaults = {
                userId: "",
                name: ""
            };
            var params = $.extend(defaults,parameters);
            var accessToken = LightBulb.friendlists.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken,
                    name: params.name
                };
                FB.api("/" + params.userId + "/friendlists", "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        
        deleteFriendList: function (parameters, callback) {
            var defaults = {
                friendlistId: ""
            };
            var params = $.extend(defaults,parameters);
            var accessToken = LightBulb.friendlists.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.friendlistId , "delete", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        createMember: function (parameters, callback) {
            var defaults = {
                friendlistId: "",
                userId: ""
            };
            var params = $.extend(defaults,parameters);
            var accessToken = LightBulb.friendlists.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.friendlistId+"/members/"+params.userId, "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        deleteMember: function (parameters, callback) {
            var defaults = {
                friendlistId: "",
                userId: ""
            };
            var params = $.extend(defaults,parameters);
            var accessToken = LightBulb.friendlists.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.friendlistId+"/members/"+params.userId, "delete", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }
    };
})(jQuery);