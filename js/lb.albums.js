/**
 * Graph API to manage a Facebook user's photo and albums
 */
//EVERYONE, ALL_FRIENDS, NETWORKS_FRIENDS, FRIENDS_OF_FRIENDS, CUSTOM
var LIGHTBULB_ALBUM_PRIVACY_EVERYONE = "EVERYONE";
var LIGHTBULB_ALBUM_PRIVACY_ALLFRIENDS = "ALL_FRIENDS";
var LIGHTBULB_ALBUM_PRIVACY_NETWORKS_FRIENDS = "NETWORKS_FRIENDS";
var LIGHTBULB_ALBUM_PRIVACY_FRIENDS_FRIENDS = "FRIENDS_OF_FRIENDS";

(function() {
    LightBulb.albums = {
        createAlbum: function(user, creator, name, description, location, privacy, type, callback) {
            var userData = $.LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (creator == "") creator = userId;
            if (type == "") type = "normal";
            if (privacy == "") privacyobj = {value:"EVERYONE"}
            else privacyobj = {value:privacy}

            if (accessToken) {
                //create the album
                var data = {
                    "access_token": accessToken,
                    "from" : creator,
                    "name":name,
                    "description" : description,
                    "location" : location,
                    "type":type,
                    "privacy":privacyobj
                }
                //alert(albumData.toSource());
                LightBulb.post("/" + user + "/albums", data,callback);
                /*FB.api("/" + user + "/albums", 'post', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        get:function(albumId, callback) {
            var userData = $.LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
            } else {
                data = {};
            }
            LightBulb.get("/" + albumId,data,callback);
            /*FB.api("/" + albumId, 'post', data, function(response) {
                if (jQuery.isFunction(callback)) callback.call(this, response);
            });*/
        },
        /**
         * Return Album without comments. This is particularly useful when you need to access only
         * meta information of the
         * @param albumId
         */
        getMeta:function(albumId, callback) {
            var userData = $.LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var albumData = {
                    "access_token": accessToken
                }
            } else {
                albumData = {};
            }
            LightBulb.get("/" + albumId + "?fields=id,name,from,description, location, link, cover_photo, privacy,count,type,created_time,updated_time",albumData,callback);
            /*FB.api("/" + albumId + "?fields=id,name,from,description, location, link, cover_photo, privacy,count,type,created_time,updated_time", 'get', albumData, function(response) {
                response.comments = {};
                if (jQuery.isFunction(callback)) callback.call(this, response);
            });*/

        },
        getPhotos:function(albumId, callback) {
            var userData = $.LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var albumData = {
                    "access_token": accessToken
                }
            } else {
                albumData = {};
            }
            LightBulb.get("/" + albumId + "/photos?fields=id,from,picture,source,images,height,width,created_time",albumData,callback);

            /*FB.api("/" + albumId + "/photos?fields=id,from,picture,source,images,height,width,created_time", 'get', albumData, function(response) {
                if (jQuery.isFunction(callback)) callback.call(this, response);
            });*/

        },
        likeAlbum: function(albumId) {
            //you need to obtain publish_stream permission for this
            var userData = $.LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var albumData = {
                    "access_token": accessToken
                }
                LightBulb.post("/" + albumId + "/like", albumData,callback);
                /*FB.api("/" + albumId + "/like", 'post', albumData, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });*/
            } else {
                throw LIGHTBULB_NO_TOKEN
            }
        },
        unlikeAlbum: function(albumId) {
            //you need to obtain publish_stream permission for this
            var userData = $.LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var albumData = {
                    "access_token": accessToken
                }
                LightBulb.delete("/" + albumId + "/like", albumData,callback);
                /*FB.api("/" + albumId + "/like", 'delete', albumData, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }

        },
        addComment:function(albumId, message) {
            //you need to obtain publish_stream permission for this
            var userData = $.LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var albumData = {
                    "access_token": accessToken,
                    "message":message
                }
                LightBulb.post("/" + albumId + "/comments", albumData,callback);
                /*FB.api("/" + albumId + "/comments", 'post', albumData, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }

        },
        addPhoto:function(albumId, source, message, callback) {
            //you need to obtain publish_stream permission for this
            var userData = $.LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var albumData = {
                    "access_token": accessToken,
                    "source":source,
                    "message":message,
                    "album_id":albumId
                }
            } else {
                albumData = {};
            }
            /*FB.api("/" + albumId + "/comments", 'post', albumData, function(response) {
             if (jQuery.isFunction(callback)) callback.call(this, response);
             });*/
            $.post("/helpers/photos.php?what=addphototoalbum", albumData, function(response) {
                if (jQuery.isFunction(callback)) callback.call(this, response);
            })
        }
    }

})();