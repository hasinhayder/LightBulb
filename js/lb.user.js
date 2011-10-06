/* 
 * User Object: A user profile as represented in the Graph API.
 */
(function() {
    LightBulb.user = {

        /**
         * @author M A Hossain Tonu
         * @param user Facebook User Id, either string "me" or a particular Facebook User/Page Id
         * @param fieldName Name of the fields in csv format
         * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
         */
        getUserDetails: function(user, fieldName, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var eventData = {
                    "access_token": accessToken,
                    "fields" : fieldName //need to work here

                }
                FB.api("/" + user , 'get', eventData, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getAlubms: function(user, callback){
            
        },
        
    };
})();

