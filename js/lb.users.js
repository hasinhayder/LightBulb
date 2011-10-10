/* 
 * Users : A user profile as represented in the Graph API.
 */
(function() {
    LightBulb.users = {

        /**
         * returns single or complete set of user object field(s)
         * may require permissions for corresponding type of asking information
         * @author M A Hossain Tonu
         * @param user Facebook User Id, either string "me" or a particular Facebook User/Page Id
         * @param fieldNameCSV name of the fields in comma separated of the user object
         */
        getUserData: function(user, fieldNameCSV, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var eventData = {
                    "access_token": accessToken,
                    "fields" : fieldNameCSV

                }
                FB.api("/" + user , 'get', eventData, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }
        
    };
})();

