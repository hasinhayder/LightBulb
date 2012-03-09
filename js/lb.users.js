/* 
 * Users : A user profile as represented in the Graph API.
 */
(function ($) {
    LightBulb.users = {

        /**
         * returns the user object field(s)
         * may require permissions for corresponding type of asking information
         * @author M A Hossain Tonu
         * @param user Facebook User Id, either string "me" or a particular Facebook User/Page Id
         * @param callback Callback function, which will be invoked when the event creation is successful or unsuccessful
         */
        getUser:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user;
                reqUrl += "?fields=id,name,first_name,middle_name,last_name,gender,locale,languages,link,username,third_party_id,timezone,updated_time,verified,bio,birthday,education,email,hometown,interested_in,location,political,favorite_athletes,favorite_teams,quotes,relationship_status,religion,significant_other,video_upload_limits,website,work";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getAccounts:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/accounts";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getAchievements:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/achievements";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getActivities:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/activities";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getAlbums:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/albums";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getAppRequests:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/apprequests";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getBooks:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/books";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getCheckins:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/checkins";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getEvents:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/events";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getFamily:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/family";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getFeed:function (parameters, callback) {
            var defaults = {
                user:"",
                limit:10
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + '/feed?' + "limit=" + params.limit;

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getFriendLists:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/friendlists";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getFriendRequests:function (parameters, callback) {
            var defaults = {
                user:"",
                limit:10
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + '/friendrequests?limit=' + params.limit;

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getFriends:function (parameters, callback) {
            var defaults = {
                user:"",
                limit:10
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + '/friends?limit=' + params.limit;

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        isFriend:function (parameters, callback) {
            var defaults = {
                user1:"",
                user2:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user1 + '/friends/' + params.user2;

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getGames:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/games";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getGroups:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/groups";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getHome:function (parameters, callback) {
            var defaults = {
                user:"",
                filter:"",
                fields:"",
                limit:50
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken,
                    limit:params.limit
                };
                var reqUrl = "/" + params.user + "/home?";
                if (params.filter != "")
                    reqUrl += "&filter=" + params.filter;
                if (params.fields != "")
                    reqUrl += "&fields=" + params.fields;

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getInbox:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/inbox";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getInterests:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/interests";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        //the pages that a User has liked
        getLikes:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/likes";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        //if a User likes a specific page
        isLiked:function (parameters, callback) {
            var defaults = {
                user:"",
                pageId:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + '/likes/' + params.pageId;

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getLinks:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/links";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getMovies:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/movies";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getMusic:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/music";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getMutualFriends:function (parameters, callback) {
            var defaults = {
                user:"",
                friendsId:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + '/mutualfriends/' + params.friendsId;

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getNotes:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/notes";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getNotifications:function (parameters, callback) {
            var defaults = {
                user:"",
                includeRead:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/notifications";

                if (params.includeRead === true)
                    reqUrl += '?include_read=1';

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getOutbox:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/outbox";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getPermissions:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/permissions";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getPhotos:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/photos";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getPokes:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/pokes";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getPosts:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/posts";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getScores:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/scores";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getStatuses:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/statuses";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getTagged:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/tagged";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getTelevision:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/television";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        //The updates in this user's inbox.
        getUpdates:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/updates";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getVideos:function (parameters, callback) {
            var defaults = {
                user:""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token:accessToken
                };
                var reqUrl = "/" + params.user + "/videos";

                FB.api(reqUrl, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        }
    };
})(jQuery);