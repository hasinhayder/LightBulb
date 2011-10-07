/* 
 * User Object: A user profile as represented in the Graph API.
 */
(function() {
    LightBulb.user = {

        /**
         * returns complete set of user object fields
         * @author M A Hossain Tonu
         * @param user Facebook User Id, either string "me" or a particular Facebook User/Page Id
         * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
         */
        getUserDetails: function(user, callback){
           var fieldNameCSV = 'id,name,first_name,middle_name,last_name,gender,locale,languages,link,username,third_party_id,timezone,updated_time,verified,bio,birthday,education,email,hometown,interested_in,location,political,favorite_athletes,favorite_teams,quotes,relationship_status,religion,significant_other,video_upload_limits,website,work';
           var response = LightBulb.user._getFieldValue(user, fieldNameCSV);
           if (jQuery.isFunction(callback)) callback.call(this, response);
        },

        
        getProfileImage: function(user, callback){
           var response = LightBulb.user._getFieldValue(user, '');
           

        },
        
        /**
         * Date string in MM/DD/YYYY format
         * @author M A Hossain Tonu
         * @param user Facebook User Id, either string "me" or a particular Facebook User/Page Id
         * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
         */
        getDOB: function(user, callback){
           var response = LightBulb.user._getFieldValue(user, 'birthday');
           if (jQuery.isFunction(callback)) callback.call(this, response);

        },
        
        /**
         * string containing a valid RFC822 email address
         * @author M A Hossain Tonu
         * @param user Facebook User Id, either string "me" or a particular Facebook User/Page Id
         * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
         */
        getEmail: function(user, callback){
           var response = LightBulb.user._getFieldValue(user, 'email');
           if (jQuery.isFunction(callback)) callback.call(this, response);

        },


        isLikedPage: function(user, pageId, callback){

        },


        getAlbums: function(user, callback){

        },
        /**
         * returns single or complete set of user object field(s)
         * @author M A Hossain Tonu
         * @param user Facebook User Id, either string "me" or a particular Facebook User/Page Id
         * @param fieldName name of the field of the user object
         */
        _getFieldValue: function(user, fieldName){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var eventData = {
                    "access_token": accessToken,
                    "fields" : fieldName //need to work here

                }
                FB.api("/" + user , 'get', eventData, function(response) {
                    return response;
                })
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }
        
    };
})();

