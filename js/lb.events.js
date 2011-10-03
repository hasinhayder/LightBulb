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
    /**
     * Update all parameters of a Facebook Event
     * @author Hasin Hayder
     * @param eventId
     * @param name Name of the event
     * @param location Location of the event
     * @param startTime Start time of the event in either unix timestamp or in m/d/Y H:i format
     * @param endTime End time of the event in either unix timestamp or in m/d/Y H:i format
     * @param description Destiption of the event
     * @param privacy Privacy of the event
     * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
     */
    update:function(eventId, name, location, startTime, endTime, description, privacy, callback) {
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
    /**
     * Update the name of an event
     * @author Hasin Hayder
     * @param eventId
     * @param name
     * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
     */
    updateName:function(eventId, name, callback) {
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
    /**
     * Update the location of an event
     * @author Hasin Hayder
     * @param eventId
     * @param location
     * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
     */
    updateLocation:function(eventId, location, callback) {
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
    /**
     * Update the start time and end time of an event
     * @author Hasin Hayder
     * @param eventId
     * @param startTime Start time of the event in either unix timestamp or in m/d/Y H:i format
     * @param endTime End time of the event in either unix timestamp or in m/d/Y H:i format
     * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
     */
    updateTime:function(eventId, startTime, endTime, callback) {
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
    /**
     * Update the description of an event
     * @author Hasin Hayder
     * @param eventId
     * @param description String
     * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
     */
    updateDescription:function(eventId, description, callback) {
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
    /**
     * delete a event
     * @author Hasin Hayder
     * @param eventId
     * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
     */
    del:function(eventId, callback) {
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
    /**
     * invite a friend or a group of friends to an event
     * @author Hasin Hayder
     * @param eventId
     * @param friends Array of Facebook user ids
     * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
     */
    invite:function(eventId, friends, callback) {
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
     * update the RSVP status of any facebook user (friend) to an event
     * @author Hasin Hayder
     * @param eventId
     * @param friend Facebook User Id
     * @param rsvp String mentioning the users RSVP status, either "attending","maybe","declined" or "noreply'
     * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
     */
    updateRSVP:function(eventId, friend, rsvp, callback) {
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