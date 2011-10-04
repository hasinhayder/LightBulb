/**
 * Graph API to manage a Facebook user's photo and albums
 */

$.fn.LightBulb.photos = {
    createAlbum:function(user, creator, name, description, location, privacy, type, callback) {
        var userData = $.fn.LightBulb._getFacebookData();
        var accessToken = userData.accessToken;
        var userId = userdata.facebookUserId;
        if (creator == "") creator = userId;
        if (!type) type = "normal";
        if (!privacy) privacy = "everyone";
        if (accessToken) {
            //create the album
            var eventData = {
                "access_token": accessToken,
                "from" : creator,
                "name":name,
                "description" : description,
                "location" : location,
                "type":type,
                "privacy":privacy
            }
            FB.api("/" + user + "/albums", 'post', eventData, function(response) {
                if (jQuery.isFunction(callback)) callback.call(this, response);
            })
        } else {
            throw LIGHTBULB_NO_TOKEN;
        }
    },
    get:function(albumId, callback) {
        var userData = $.fn.LightBulb._getFacebookData();
        var accessToken = userData.accessToken;
        var userId = userdata.facebookUserId;
        if (accessToken) {
            var eventData = {
                "access_token": accessTokens
            }
        } else {
            eventData = {};
        }
        FB.api("/" + albumId, 'post', eventData, function(response) {
            if (jQuery.isFunction(callback)) callback.call(this, response);
        });
    },
    /**
     * Return Album without comments. This is particularly useful when you need to access only
     * meta information of the
     * @param albumId
     */
    getMeta:function(albumId, callback) {
        var userData = $.fn.LightBulb._getFacebookData();
        var accessToken = userData.accessToken;
        var userId = userdata.facebookUserId;
        if (accessToken) {
            var eventData = {
                "access_token": accessTokens
            }
        } else {
            eventData = {};
        }
        FB.api("/" + albumId + "?fields=id,name,from,description, location, link, cover_photo, privacy,count,type,created_time,updated_time", 'get', eventData, function(response) {
            response.comments = {};
            if (jQuery.isFunction(callback)) callback.call(this, response);
        });

    },
    getPhotos:function(albumId, callback) {
        var userData = $.fn.LightBulb._getFacebookData();
        var accessToken = userData.accessToken;
        var userId = userdata.facebookUserId;
        if (accessToken) {
            var eventData = {
                "access_token": accessTokens
            }
        } else {
            eventData = {};
        }
        FB.api("/" + albumId + "/photos?fields=id,from,picture,source,images,height,width,created_time", 'get', eventData, function(response) {
            if (jQuery.isFunction(callback)) callback.call(this, response);
        });

    }
}
