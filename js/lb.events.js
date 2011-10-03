/**
 * Helper functions to manage Facebook events using LightBulb.
 */

$.fn.LightBulb.events = {
    create: function(name,location, startTime, endTime, description){
        var opts = $.fn.LightBulb._getOptins();
        alert(opts.toSource());
    },
    update:function(eventId, name,location, startTime, endTime, description){

    },
    updateName:function(eventId, name){
        
    },
    updateLocation:function(eventId, location){

    },
    updateTime:function(eventId, startTime,endTime){

    },
    updateDescription:function(eventId,description){

    },
    delete:function(eventId){

    },
    invite:function(eventId, friends){

    },
    updateRSVP:function(eventId, friends, rsvp){

    }
};