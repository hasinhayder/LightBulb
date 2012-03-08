/**
 * Graph API to manage a Facebook user's photo and albums
 */
//EVERYONE, ALL_FRIENDS, NETWORKS_FRIENDS, FRIENDS_OF_FRIENDS, CUSTOM
var LIGHTBULB_ALBUM_PRIVACY_EVERYONE = "EVERYONE";
var LIGHTBULB_ALBUM_PRIVACY_ALLFRIENDS = "ALL_FRIENDS";
var LIGHTBULB_ALBUM_PRIVACY_NETWORKS_FRIENDS = "NETWORKS_FRIENDS";
var LIGHTBULB_ALBUM_PRIVACY_FRIENDS_FRIENDS = "FRIENDS_OF_FRIENDS";

(function($) {
    LightBulb.albums = {
        createAlbum: function (parameters, callback) {
            var defaults = {
                user: "",
                creator: "",
                name: "",
                description: "",
                location: "",
                privacy: "",
                type: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = $.LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (params.creator === "") params.creator = userId;
            if (params.type === "") params.type = "normal";
            if (params.privacy === "") params.privacyobj = {value: "EVERYONE"};
            else params.privacyobj = {value: privacy};

            if (accessToken) {
                //create the album
                var data = {
                    access_token: accessToken,
                    from: params.creator,
                    name: params.name,
                    description: params.description,
                    location: params.location,
                    type: params.type,
                    privacy: params.privacyobj
                };
                //alert(albumData.toSource());
                LightBulb.post("/" + params.user + "/albums", data, callback);
                /*FB.api("/" + user + "/albums", "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                })*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        getAlbums: function (parameters, callback) {
            var defaults = {
                user: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                var reqUrl = "/" + params.user + "/albums";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },

        get: function (parameters, callback) {
            var defaults = {
                albumId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = $.LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
            } else {
                data = {};
            }
            LightBulb.get("/" + params.albumId, data, callback);
            /*FB.api("/" + albumId, "post", data, function (response) {
                if (jQuery.isFunction(callback)) callback.call(this, response);
            });*/
        },
        /**
         * Return Album without comments. This is particularly useful when you need to access only
         * meta information of the
         * @param albumId
         */
        getMeta: function (parameters, callback) {
            var defaults = {
                albumId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = $.LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var albumData = {
                    access_token: accessToken
                };
            } else {
                albumData = {};
            }
            LightBulb.get("/" + params.albumId + "?fields=id,name,from,description, location, link, cover_photo, privacy,count,type,created_time,updated_time", albumData, callback);
            /*FB.api("/" + albumId + "?fields=id,name,from,description, location, link, cover_photo, privacy,count,type,created_time,updated_time", "get", albumData, function (response) {
                response.comments = {};
                if (jQuery.isFunction(callback)) callback.call(this, response);
            });*/

        },
        getPhotos: function (parameters, callback) {
            var defaults = {
                albumId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = $.LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var albumData = {
                    access_token: accessToken
                };
            } else {
                albumData = {};
            }
            LightBulb.get("/" + params.albumId + "/photos?fields=id,from,picture,source,images,height,width,created_time", albumData, callback);

            /*FB.api("/" + albumId + "/photos?fields=id,from,picture,source,images,height,width,created_time", "get", albumData, function (response) {
                if (jQuery.isFunction(callback)) callback.call(this, response);
            });*/

        },
        likeAlbum: function (parameters, callback) {
            var defaults = {
                albumId: ""
            };
            var params = $.extend(defaults, parameters);
            //you need to obtain publish_stream permission for this
            var userData = $.LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var albumData = {
                    access_token: accessToken
                };
                LightBulb.post("/" + params.albumId + "/like", albumData, callback);
                /*FB.api("/" + albumId + "/like", "post", albumData, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        unlikeAlbum: function (parameters,callback) {
            var defaults = {
                albumId: ""
            };
            var params = $.extend(defaults, parameters);
            //you need to obtain publish_stream permission for this
            var userData = $.LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var albumData = {
                    access_token: accessToken
                };
                LightBulb.remove("/" + params.albumId + "/like", albumData, callback);
                /*FB.api("/" + albumId + "/like", "delete", albumData, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }

        },
        addComment: function (parameters, callback) {
            var defaults = {
                albumId: "",
                message:""
            };
            var params = $.extend(defaults, parameters);
            //you need to obtain publish_stream permission for this
            var userData = $.LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var albumData = {
                    access_token: accessToken,
                    message: params.message
                };
                LightBulb.post("/" + params.albumId + "/comments", albumData, callback);
                /*FB.api("/" + albumId + "/comments", "post", albumData, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });*/
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }

        },
        addPhoto: function (parameters, callback) {
            //you need to obtain publish_stream permission for this
            var defaults = {
                albumId: "",
                source: "",
                message: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = $.LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            var userId = userData.facebookUserId;
            if (accessToken) {
                var albumData = {
                    access_token: accessToken,
                    source: params.source,
                    message: params.message,
                    album_id: params.albumId
                };
            } else {
                albumData = {};
            }
            /*FB.api("/" + albumId + "/comments", "post", albumData, function (response) {
             if (jQuery.isFunction(callback)) callback.call(this, response);
             });*/
            $.post("/helpers/photos.php?what=addphototoalbum", albumData, function (response) {
                if (jQuery.isFunction(callback)) callback.call(this, response);
            });
        }
    };
})(jQuery);