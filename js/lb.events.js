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
            throw "User must be logged in";
        }

    },
    update:function(eventId, name, location, startTime, endTime, description, privacy) {
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
            FB.api("/"+eventId+"", 'post', eventData, function(response) {
                if(jQuery.isFunction(opts.callback)) opts.callback(response);
            })
        }else{
            throw "User must be logged in";
        }
    },
    updateName:function(eventId, name) {
        var userData = $.fn.LightBulb._getFacebookData();
        var accessToken = userData.accessToken;
        if (accessToken) {
            var eventData = {
                "access_token": accessToken,
                "name" : name
            }
            FB.api("/"+eventId+"", 'post', eventData, function(response) {
                if(jQuery.isFunction(opts.callback)) opts.callback(response);
            })
        }else{
            throw "User must be logged in";
        }
    },
    updateLocation:function(eventId, location) {
        var userData = $.fn.LightBulb._getFacebookData();
        var accessToken = userData.accessToken;
        if (accessToken) {
            var eventData = {
                "access_token": accessToken,
                "location" : location
            }
            FB.api("/"+eventId+"", 'post', eventData, function(response) {
                if(jQuery.isFunction(opts.callback)) opts.callback(response);
            })
        }else{
            throw "User must be logged in";
        }
    },
    updateTime:function(eventId, startTime, endTime) {
        var userData = $.fn.LightBulb._getFacebookData();
        var accessToken = userData.accessToken;
        if (accessToken) {
            var eventData = {
                "access_token": accessToken,
                "start_time" : startTime,
                "end_time":endTime
            }
            FB.api("/"+eventId+"", 'post', eventData, function(response) {
                if(jQuery.isFunction(opts.callback)) opts.callback(response);
            })
        }else{
            throw "User must be logged in";
        }
    },
    updateDescription:function(eventId, description) {
        var userData = $.fn.LightBulb._getFacebookData();
        var accessToken = userData.accessToken;
        if (accessToken) {
            var eventData = {
                "access_token": accessToken,
                "description" : description
            }
            FB.api("/"+eventId+"", 'post', eventData, function(response) {
                if(jQuery.isFunction(opts.callback)) opts.callback(response);
            })
        }else{
            throw "User must be logged in";
        }
    },
    delete:function(eventId) {
        var userData = $.fn.LightBulb._getFacebookData();
        var accessToken = userData.accessToken;
        if (accessToken) {
            var eventData = {
                "access_token": accessToken
            }
            FB.api("/"+eventId+"", 'delete', eventData, function(response) {
                if(jQuery.isFunction(opts.callback)) opts.callback(response);
            })
        }else{
            throw "User must be logged in";
        }
    },
    invite:function(eventId, friends) {
        var userData = $.fn.LightBulb._getFacebookData();
        var accessToken = userData.accessToken;
        if (accessToken) {
            var eventData = {
                "access_token": accessToken,
                "users":friends.join(",")
            }
            FB.api("/"+eventId+"/invite", 'post', eventData, function(response) {
                if(jQuery.isFunction(opts.callback)) opts.callback(response);
            })
        }else{
            throw "User must be logged in";
        }
    },
    /**
     *
     * @param eventId
     * @param friend Facebook User Id
     * @param rsvp String mentioning the users RSVP status, either "attending","maybe","declined" or "noreply'
     */
    updateRSVP:function(eventId, friend, rsvp) {
        var userData = $.fn.LightBulb._getFacebookData();
        var accessToken = userData.accessToken;
        if (accessToken) {
            var eventData = {
                "access_token": accessTokens
            }
            FB.api("/"+eventId+"/"+rsvp+"/"+friend, 'post', eventData, function(response) {
                if(jQuery.isFunction(opts.callback)) opts.callback(response);
            })
        }else{
            throw "User must be logged in";
        }
    }
};