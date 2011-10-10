/* 
 * Users : A user profile as represented in the Graph API.
 */
(function() {
    LightBulb.users = {
        
        /**
         * returns the user object field(s)
         * may require permissions for corresponding type of asking information
         * @author M A Hossain Tonu
         * @param user Facebook User Id, either string "me" or a particular Facebook User/Page Id
         * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
         */
        getUser: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user;
                reqUrl += "?fields=id,name,first_name,middle_name,last_name,gender,locale,languages,link,username,third_party_id,timezone,updated_time,verified,bio,birthday,education,email,hometown,interested_in,location,political,favorite_athletes,favorite_teams,quotes,relationship_status,religion,significant_other,video_upload_limits,website,work";
                
                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getAccounts: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/accounts';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getAchievements: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/achievements';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getActivities: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/activities';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getAlbums: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/albums';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getAppRequests: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/apprequests';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getBooks: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/books';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getCheckins: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/checkins';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getEvents: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/events';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getFamily: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/family';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getFeed: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/feed';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getFriendLists: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/friendlists';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getFriendRequests: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/friendrequests';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getFriends: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/friends';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        isFriend: function(user, friendsId, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/friends/'+friendsId;

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getGames: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/games';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getGroups: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/groups';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getHome: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/home';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getInbox: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/inbox';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getInterests: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/interests';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        //the pages that a User has liked
        getLikes: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/likes';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        //if a User likes a specific page
        isLiked: function(user, pageId, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/likes/'+pageId;

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getLinks: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/links';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getMovies: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/movies';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getMusic: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/music';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getMutualFriends: function(user, friendsId, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/mutualfriends/'+friendsId;

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getNotes: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/notes';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getNotifications: function(user, includeRead, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/notifications';

                if(includeRead===true)
                    reqUrl += '?include_read=1';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getOutbox: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/outbox';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getPermissions: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/permissions';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getPhotos: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/photos';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getPokes: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/pokes';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getPosts: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/posts';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getScores: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/scores';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getStatuses: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/statuses';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getTagged: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/tagged';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getTelevision: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/television';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        //The updates in this user's inbox.
        getUpdates: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/updates';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getVideos: function(user, callback){
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    "access_token": accessToken
                }
                var reqUrl = "/"+user+'/videos';

                FB.api(reqUrl, 'get', data, function(response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }
        
    };
})();

