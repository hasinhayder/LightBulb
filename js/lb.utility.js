/*
 * Utility functions which cannot be categorized in any other category
 */
(function ($) {
    LightBulb.utility = {
        currentToken:"",
        /**
         * User must set the page token to retrieve utility from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken:function (token) {
            LightBulb.utility.currentToken = token;
            return true;
        },
        removeToken:function () {
            LightBulb.utility.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken:function () {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if (LightBulb.utility.currentToken) token = LightBulb.utility.currentToken;
            return token;
        },
        runFQL:function (parameters, callback) {
            var defaults = {
                fql:""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.utility.getToken();
            //alert(accessToken+"\n"+params.fql);
            if (accessToken && params.fql) {
                var data = {
                    access_token:accessToken,
                    q:params.fql
                };
                FB.api("/fql" , "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getLatestPhotos: function(parameters, callback){
            var defaults = {
                user:"me()",
                limit:50,
                offset:0
            };
            var params = $.extend(defaults, parameters);
            if (params.user=="me") params.user = "me()";
            var fql = "SELECT pid, aid, owner, src_small, src_big, src, link, caption, created FROM photo WHERE aid IN (SELECT aid FROM album WHERE owner= "+params.user+" ORDER BY modified_major DESC) ORDER BY created DESC LIMIT "+params.limit+" OFFSET "+params.offset;
            LightBulb.utility.runFQL(fql,callback);
        }
    };
})(jQuery);