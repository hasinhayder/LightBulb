/**
 * Helper functions to manage Facebook events using LightBulb.
 */

$.fn.LightBulb.events = {

    /**
     * @author Hasin Hayder
     * @param user Facebook User Id, either string "me" or a particular Facebook User/Page Id
     * @param name Name of the event
     * @param location Location of the event
     * @param startTime Start time of the event in either unix timestamp or in m/d/Y H:i format
     * @param endTime End time of the event in either unix timestamp or in m/d/Y H:i format
     * @param description Destiption of the event
     * @param privacy Privacy of the event
     * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
     */
    create: function(user, name, location, startTime, endTime, description, privacy, callback) {
        var userData = $.fn.LightBulb._getFacebookData();
        var accessToken = userData.accessToken;
        if (accessToken) {
            var eventData = {
                "access_token": accessToken,
                "start_time" : startTime,
                "end_time":endTime,
                "location" : location,
                "name" : name,
                "description":description,
                "privacy":privacy
            }
            FB.api("/"+user+"/events", 'post', eventData, function(response) {
                if(jQuery.isFunction(opts.callback)) opts.callback(response);
            })
        }else{
            //throw exception
        }

    },
    update:function(eventId, name, location, startTime, endTime, description) {

    },
    updateName:function(eventId, name) {

    },
    updateLocation:function(eventId, location) {

    },
    updateTime:function(eventId, startTime, endTime) {

    },
    updateDescription:function(eventId, description) {

    },
    delete:function(eventId) {

    },
    invite:function(eventId, friends) {

    },
    updateRSVP:function(eventId, friends, rsvp) {

    }
};