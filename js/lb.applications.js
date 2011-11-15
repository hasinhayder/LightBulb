/**
 * Wrapper for Applications Object
 * @author Hasin Hayder
 */

(function(){
    LightBulb.applications = {
        currentToken:"",
        /**
         * User must set the page token to retrieve applications from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken:function(token) {
            LightBulb.applications.currentToken = token;
            return true;
        },
        removeToken:function() {
            LightBulb.applications.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken:function() {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if (LightBulb.applications.currentToken) token = LightBulb.applications.currentToken;
            return token;
        }
    }
})();