/**
 * Wrapper for managing pages
 *
 * @author Hasin Hayder
 */
var PAGE_SETTINGS_USERS_CAN_POST = "USERS_CAN_POST";
var PAGE_SETTINGS_USERS_CAN_POST_PHOTOS = "USERS_CAN_POST_PHOTOS";
var PAGE_SETTINGS_USERS_CAN_TAG_PHOTOS = "USERS_CAN_TAG_PHOTOS";
var PAGE_SETTINGS_USERS_CAN_POST_VIDEOS = "USERS_CAN_POST_VIDEOS";

(function($) {
    LightBulb.pages = {
        pages: {},
        currentToken: "",
        getPages: function (paramseters, callback) {
            var defaults = {
                userId: ""
            };
            var params = $.extend(defaults, parameters);
            if (userId === "") userId = "me";
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.userId + "/accounts", "get", data, function (response) {
                    LightBulb.pages.pages = response.data;
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        setToken: function (token) {
            LightBulb.pages.currentToken = token;
            return true;
        },
        removeToken: function () {
            LightBulb.pages.currentToken = "";
        },
        getPage: function (parameters, callback) {
            var defaults = {
                pageId: "",
                returnToken: "" //true or false
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                var reqUrl = "/" + params.pageId;
                if (params.returnToken)
                    reqUrl += "?fields=id,name,link,category,location,phone,checkins,access_token,picture,cover";
                else
                    reqUrl += "?fields=id,name,link,category,location,phone,checkins,picture,cover";
                FB.api(reqUrl, "get", data, function (response) {
                    LightBulb.pages.pages = response.data;
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getFeeds: function (parameters, callback) {
            var defaults = {
                pageId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.pageId + "/feeds", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getSettings: function (parameters, callback) {
            var defaults = {
                pageId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    access_token: LightBulb.pages.currentToken
                };
                FB.api("/" + params.pageId + "/settings", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        updateSettings: function (parameters, callback) {
            var defaults = {
                pageId: "",
                settingsName: "",
                settingsValue: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    access_token: LightBulb.pages.currentToken,
                    setting: params.settingsName,
                    value: params.settingsValue
                };
                FB.api("/" + params.pageId + "/settings", "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        getLinks: function (parameters, callback) {
            var defaults = {
                pageId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.pageId + "/links", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getPhotos: function (parameters, callback) {
            var defaults = {
                pageId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.pageId + "/photos", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getGroups: function (parameters, callback) {
            var defaults = {
                pageId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.pageId + "/groups", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getAlbums: function (parameters, callback) {
            var defaults = {
                pageId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.pageId + "/albums", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getStatuses: function (parameters, callback) {
            var defaults = {
                pageId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.pageId + "/statuses", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getVideos: function (parameters, callback) {
            var defaults = {
                pageId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.pageId + "/videos", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getNotes: function (parameters, callback) {
            var defaults = {
                pageId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.pageId + "/notes", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getPosts: function (parameters, callback) {
            var defaults = {
                pageId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.pageId + "/posts", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getEvents: function (parameters, callback) {
            var defaults = {
                pageId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.pageId + "/events", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getAdmins: function (parameters, callback) {
            var defaults = {
                pageId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    access_token: LightBulb.pages.currentToken
                };
                FB.api("/" + params.pageId + "/admins", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        getBlockedUsers: function (parameters, callback) {
            var defaults = {
                pageId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    access_token: LightBulb.pages.currentToken
                };
                FB.api("/" + params.pageId + "/blocked", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        isTabInstalled: function (parameters, callback) {
            var defaults = {
                pageId: "",
                applicationId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    access_token: LightBulb.pages.currentToken,
                    app_id: params.applicationId
                };
                FB.api("/" + params.pageId + "/tabs/" + params.applicationId, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        getTabs: function (parameters, callback) {
            var defaults = {
                pageId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    access_token: LightBulb.pages.currentToken
                };
                FB.api("/" + params.pageId + "/tabs", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        createTab: function (parameters, callback) {
            var defaults = {
                pageId: "",
                applicationId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    access_token: LightBulb.pages.currentToken,
                    app_id: params.applicationId
                };
                FB.api("/" + params.pageId + "/tabs", "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        updateTab: function (parameters, callback) {
            var defaults = {
                pageId: "",
                tabId: "",
                position: "",
                customName: "",
                isDefault: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    access_token: LightBulb.pages.currentToken
                };
                if (params.position) data.position = params.position;
                if (params.customName) data.custom_name = params.customName;
                if (params.isDefault) data.is_non_connection_landing_tab = true;
                FB.api("/" + params.pageId + "/tabs/" + params.tabId, "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        deletTab: function (parameters, callback) {
            var defaults = {
                pageId: "",
                tabId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    access_token: LightBulb.pages.currentToken
                };
                FB.api("/" + params.pageId + "/tabs/" + params.tabId, "delete", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        isAdmin: function (parameters, callback) {
            var defaults = {
                pageId: "",
                userId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    access_token: LightBulb.pages.currentToken
                };
                FB.api("/" + params.pageId + "/admins/" + params.userId, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        isBlocked: function (parameters, callback) {
            var defaults = {
                pageId: "",
                userId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    access_token: LightBulb.pages.currentToken
                };
                FB.api("/" + params.pageId + "/blocked/" + params.userId, "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        blockUsers: function (parameters, callback) {
            var defaults = {
                pageId: "",
                users: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    access_token: LightBulb.pages.currentToken,
                    uid: params.users.join(",")
                };
                FB.api("/" + params.pageId + "/blocked/", "post", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        },
        unblockUsers: function (parameters, callback) {
            var defaults = {
                pageId: "",
                userId: ""
            };
            var params = $.extend(defaults, parameters);
            var userData = LightBulb._getFacebookData();
            var accessToken = userData.accessToken;
            if (LightBulb.pages.currentToken) {
                var data = {
                    access_token: LightBulb.pages.currentToken,
                    uid: userId
                };
                FB.api("/" + params.pageId + "/blocked/", "delete", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_PAGE_TOKEN;
            }
        }
    };
})(jQuery);