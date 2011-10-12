/**
 * Manage statuses in Facebook.
 */
(function(){
    LightBulb.statuses = {
        currentToken:"",
        /**
         * User must set the page token to retrieve statuses from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken:function(token) {
            LightBulb.statuses.currentToken = token;
            return true;
        },
        removeToken:function() {
            LightBulb.statuses.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken:function() {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if (LightBulb.statuses.currentToken) token = LightBulb.statuses.currentToken;
            return token;
        },
    }
})();