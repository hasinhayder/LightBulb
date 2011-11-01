/**
 * Wrapper to manage all questions
 */
(function(){
    LightBulb.questions = {
        currentToken:"",
        /**
         * User must set the page token to retrieve questions from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken:function(token) {
            LightBulb.questions.currentToken = token;
            return true;
        },
        removeToken:function() {
            LightBulb.questions.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken:function() {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if (LightBulb.questions.currentToken) token = LightBulb.questions.currentToken;
            return token;
        },
        getQuestions:function(userId) {
            var accessToken = LightBulb.questions.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + userId + "/questions", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getQuestion:function(questionId) {
            var accessToken = LightBulb.questions.getToken();
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                FB.api("/" + questionId + "", 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }
        
    }
})();