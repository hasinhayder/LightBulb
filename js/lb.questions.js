/**
 * Wrapper to manage all questions
 * @author Hasin Hayder
 */
(function($) {
    LightBulb.questions = {
        currentToken: "",
        /**
         * User must set the page token to retrieve questions from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken: function (token) {
            LightBulb.questions.currentToken = token;
            return true;
        },
        removeToken: function () {
            LightBulb.questions.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken: function () {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if (LightBulb.questions.currentToken) token = LightBulb.questions.currentToken;
            return token;
        },
        getQuestions: function (parameters, callback) {
            var defaults = {
                userId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.questions.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.userId + "/questions", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getQuestion: function (parameters, callback) {
            var defaults = {
                questionId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.questions.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.questionId + "", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getOptions: function (parameters) {
            var defaults = {
                questionId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.questions.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.questionId + "/options", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }
    };
})(jQuery);