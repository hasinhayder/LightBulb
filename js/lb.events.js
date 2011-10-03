/**
 * Helper functions to manage Facebook events using LightBulb.
 */

$.fn.LightBulb.events = {
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