/**
 * Helper functions to manage Facebook events using LightBulb.
 * Tonu here again
 */
(function($) {
    LightBulb.events = {

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
        create: function (parameters, callback) {
            var defaults = {
                user: "",
                name: "",
                location: "",
                startTime: "",
                endTime: "",
                description: "",
                privacy: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            // alert(accessToken);
            if (accessToken) {
                var eventData = {
                    access_token: accessToken,
                    start_time: params.startTime,
                    end_time: params.endTime,
                    location: params.location,
                    name: params.name,
                    description: params.description,
                    privacy: params.privacy,
                    owner: {
                        id: userId,
                        name: ""
                    }
                };
                LightBulb.post("/" + params.user + "/events",eventData,callback);
                /*FB.api("/" + user + "/events", "post", eventData, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }

        },
        /**
         * @author Hasin Hayder
         * @param user Facebook User Id, either string "me" or a particular Facebook User/Page Id
         * @param name Name of the event
         * @param location Location of the event
         * @param startTime Start time of the event in either unix timestamp or in m/d/Y H:i format
         * @param endTime End time of the event in either unix timestamp or in m/d/Y H:i format
         * @param description Destiption of the event
         * @param privacy Privacy of the event
         * @param picture http url/source of the picture
         * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
         */
        createWithPicture: function (parameters, callback) {
            var defaults = {
                user: "",
                name: "",
                location: "",
                startTime: "",
                endTime: "",
                description: "",
                privacy: "",
                picture: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var eventData = {
                    access_token: accessToken,
                    start_time: params.startTime,
                    end_time: params.endTime,
                    location: params.location,
                    name: params.name,
                    description: params.description,
                    privacy: params.privacy,
                    picture: params.picture,
                    user: params.user
                };
                $.post("/helpers/events.php?what=createevent", eventData, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
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
        update: function (parameters, callback) {
            var defaults = {
                eventId: "",
                name: "",
                location: "",
                startTime: "",
                endTime: "",
                description: "",
                privacy: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var eventData = {
                    access_token: accessToken,
                    start_time: params.startTime,
                    end_time: params.endTime,
                    location: params.location,
                    name: params.name,
                    description: params.description,
                    privacy: params.privacy
                };
                LightBulb.post("/" + params.eventId + "",eventData,callback);
                /*FB.api("/" + eventId + "", "post", eventData, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        /**
         * Update the name of an event
         * @author Hasin Hayder
         * @param eventId
         * @param name
         * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
         */
        updateName: function (parameters, callback) {
            var defaults = {
                eventId: "",
                name: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var eventData = {
                    access_token: accessToken,
                    name: params.name
                };
                LightBulb.post("/" + params.eventId + "", eventData,callback);
                /*FB.api("/" + eventId + "", "post", eventData, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        /**
         * Update the location of an event
         * @author Hasin Hayder
         * @param eventId
         * @param location
         * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
         */
        updateLocation: function (parameters, callback) {
            var defaults = {
                eventId: "",
                location: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var eventData = {
                    access_token: accessToken,
                    location: params.location
                };
                LightBulb.post("/" + params.eventId + "",eventData,callback);
                /*FB.api("/" + eventId + "", "post", eventData, function (response) {
                    if (LightBulb.isFunction(callback)) callback.call(this, response);
                })*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
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
        updateTime: function (parameters, callback) {
            var defaults = {
                eventId: "",
                startTime: "",
                endTime: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var eventData = {
                    access_token: accessToken,
                    start_time: params.startTime,
                    end_time: params.endTime
                };
                LightBulb.post("/" + params.eventId + "", eventData,callback);
                /*FB.api("/" + eventId + "", "post", eventData, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        /**
         * Update the description of an event
         * @author Hasin Hayder
         * @param eventId
         * @param description String
         * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
         */
        updateDescription: function (parameters, callback) {
            var defaults = {
                eventId: "",
                description: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var eventData = {
                    access_token: accessToken,
                    description: params.description
                };
                LightBulb.post("/" + params.eventId + "", eventData,callback);
                /*FB.api("/" + eventId + "", "post", eventData, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        /**
         * delete a event
         * @author Hasin Hayder
         * @param eventId
         * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
         */
        del: function (parameters, callback) {
            var defaults = {
                eventId: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var eventData = {
                    access_token: accessToken
                };
                LightBulb.remove("/" + params.eventId + "",eventData,callback);
                /*FB.api("/" + eventId + "", "delete", eventData, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        /**
         * invite a friend or a group of friends to an event
         * @author Hasin Hayder
         * @param eventId
         * @param friends Array of Facebook user ids
         * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
         */
        invite: function (parameters, callback) {
            var defaults = {
                eventId: "",
                friends: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var eventData = {
                    access_token: accessToken,
                    users: params.friends.join(",")
                };
                LightBulb.post("/" + params.eventId + "/invite",eventData,callback);
                /*FB.api("/" + eventId + "/invite", "post", eventData, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
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
        updateRSVP: function (parameters, callback) {
            var defaults = {
                eventId: "",
                friend: "",
                rsvp: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var eventData = {
                    access_token: accessToken
                };
                LightBulb.post("/" + params.eventId + "/" + params.rsvp + "/" + params.friend, eventData,callback);
                /*FB.api("/" + eventId + "/" + rsvp + "/" + friend, "post", eventData, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        /**
         * @author: Hasin Hayder
         * Return detail information about a Facebook event
         * @param eventId
         * @param callback
         */
        get: function (parameters, callback) {
            var defaults = {
                eventId: ""
            };
            var params = $.extend(defaults,parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var eventData = {
                    access_token: accessToken
                };
            } else {
                eventData = {};
            }
            LightBulb.get("/" + params.eventId + "",eventData,callback);
            /*FB.api("/" + eventId, "get", eventData, function (response) {
                if (jQuery.isFunction(callback)) callback.call(this, response);
            })*/
        }
    };
})(jQuery);