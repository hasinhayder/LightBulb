/**
 * Graph API to manage a Facebook user's photo and albums
 */

$.fn.LightBulb.photos = {
    createAlbum:function(user,creator, name,description, location,privacy, type){
        var userData = $.fn.LightBulb._getFacebookData();
        var accessToken = userData.accessToken;
        var userId = userdata.facebookUserId;
        if(creator=="") creator = userId;
        if(!type) type="normal";
        if(!privacy) privacy="everyone";
        if(accessToken){
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
            FB.api("/"+user+"/albums", 'post', eventData, function(response) {
                if(jQuery.isFunction(callback)) callback.call(this, response);
            })
        } else {
            throw LIGHTBULB_NO_TOKEN;
        }
    },
    get:function(albumId){
        var userData = $.fn.LightBulb._getFacebookData();
        var accessToken = userData.accessToken;
        var userId = userdata.facebookUserId;
        if(accessToken){
            var eventData = {
                "access_token": accessToken
            }
            FB.api("/"+albumId, 'post', eventData, function(response) {
                if(jQuery.isFunction(callback)) callback.call(this, response);
            })
        }
        else{
            throw LIGHTBULB_NO_TOKEN;
        }
    },
    getMeta:function(albumId){
        var userData = $.fn.LightBulb._getFacebookData();
        var accessToken = userData.accessToken;
        var userId = userdata.facebookUserId;
        if(accessToken){
            var eventData = {
                "access_token": accessToken
            }
            FB.api("/"+albumId, 'post', eventData, function(response) {
                if(jQuery.isFunction(callback)) callback.call(this, response);
            })
        }
        else{
            throw LIGHTBULB_NO_TOKEN;
        }
    }
}
