/**
 * Graph API to manage a Facebook user's photo and albums
 */

$.fn.LightBulb.photos = {
    createAlbum:function(user,creator, name,description, location,privacy, type){
        var userData = $.fn.LightBulb._getFacebookData();
        var accessToken = userData.accessToken;
        if(!type) type="normal";
        if(!privacy) privacy="everyone";
    }
}
