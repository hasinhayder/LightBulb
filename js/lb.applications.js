/**
 * Wrapper for Applications Object
 * @author Hasin Hayder
 */

(function($) {
    LightBulb.applications = {
        currentToken: "",
        appToken: "",
        /**
         * User must set the page token to retrieve applications from page. User lb.pages.js to get Page specific tokens
         *
         * @author Hasin Hayder
         * @param token
         */
        setToken: function (token) {
            LightBulb.applications.currentToken = token;
            return true;
        },
        removeToken: function () {
            LightBulb.applications.currentToken = "";
        },

        /**
         * Return currently active token, either of a user or a page
         *
         * @author Hasin Hayder
         */
        getToken: function () {
            var userData = LightBulb._getFacebookData();
            var token = userData.accessToken;
            if (LightBulb.applications.currentToken) token = LightBulb.applications.currentToken;
            return token;
        },
        getApplication: function (parameters, callback) {
            var defaults = {
                appId: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.applications.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken
                };
                FB.api("/" + params.appId + "", "get", data, function (response) {
                    if (jQuery.isFunction(callback)) callback.call(this, response);
                });
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getTestUsers: function (parameters, callback) {
            var defaults = {
                appId: ""
            };
            var params = $.extend(defaults, parameters);
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken
                };
                LightBulb.get("/" + params.appId + "/accounts/test-users", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        fetchAppToken: function (parameters, callback) {
            var defaults = {
                appId: "",
                appSecret: ""
            };
            var params = $.extend(defaults, parameters);
            var accessToken = LightBulb.applications.getToken();
            if (accessToken) {
                var data = {
                    access_token: accessToken,
                    appid: params.appId,
                    secret: params.appSecret
                };
                //LightBulb.get("/oauth/access_token?client_id=" + appId + "&client_secret="+appSecret+"&grant_type=client_credentials&http%3A%2F%2Ffacebook.com",data,callback);
                $.post("/helpers/app.php", data, callback);
            } else {
                throw LIGHTBULB_NO_TOKEN;
            }
        },
        getAppToken: function () {
            if (LightBulb.applications.appToken)
                return LightBulb.applications.appToken;
            return false;
        },
        setAppToken: function (token) {
            LightBulb.applications.appToken = token;
        },
        createTestUser: function (parameters, callback) {
            var defaults = {
                name: "",
                permissions: ""
            };
            var params = $.extend(defaults, parameters);
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken,
                    name: params.name,
                    installed: true,
                    permissions: params.permissions
                };
                LightBulb.post("/" + appId + "/accounts/test-users", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        addTestUser: function (parameters, callback) {
            var defaults = {
                appId: "",
                testUserId: "",
                permissions: "",
                ownerAppToken: ""
            };
            var params = $.extend(defaults, parameters);
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken,
                    uid: params.testUserId,
                    owner_access_token: params.ownerAppToken,
                    installed: true,
                    permissions: params.permissions
                };
                LightBulb.post("/" + params.appId + "/accounts/test-users", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getTestUser: function (parameters, callback) {
            var defaults = {
                appId: "",
                testUserId: ""
            };
            var params = $.extend(defaults, parameters);
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken
                };
                LightBulb.get("/" + params.appId + "/accounts/test-users/" + testUserId, data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        makeTestUsersFriendRequest: function (testUserId1, testuserId2, callback) {
            var defaults = {
                testUserId1: "",
                testUserId2: ""
            };
            var params = $.extend(defaults, parameters);
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken
                };
                LightBulb.post("/" + params.testUserId1 + "/friends/" + params.testUserId2, data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        updateTestUser: function (parameters, callback) {
            var defaults = {
                testUserId: "",
                name: "",
                password: ""
            };
            var params = $.extend(defaults, parameters);
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken,
                    name: params.name,
                    password: params.password
                };
                LightBulb.post("/" + params.testUserId + "", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        deleteTestUser: function (testUserId, callback) {
            var defaults = {
                testUserId: ""
            };
            var params = $.extend(defaults, parameters);
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken
                };
                LightBulb.remove("/" + params.testUserId + "", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getBannedUsers: function (appId, callback) {
            var defaults = {
                appId: ""
            };
            var params = $.extend(defaults, parameters);
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken
                };
                LightBulb.get("/" + params.appId + "/banned", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        isBanned: function (parameters, callback) {
            var defaults = {
                appId: "",
                userId: ""
            };
            var params = $.extend(defaults,parameters);
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken
                };
                LightBulb.get("/" + params.appId + "/banned/" + userId, data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        banUsers: function (appId, users, callback) {
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken
                };
                busers = users.join(",");
                LightBulb.post("/" + appId + "/banned?uid=" + busers, data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        unBanUsers: function (parameters, callback) {
            var defaults = {
                appId: "",
                userId: ""
            };
            var params = $.extend(defaults,parameters);
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken
                };
                busers = users.join(",");
                LightBulb.remove("/" + params.appId + "/banned/" + userId, data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getInsights: function (appId, callback) {
            /*Must need read_insights permission*/
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken
                };
                LightBulb.get("/" + appId + "/insights", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getPayments: function (appId, callback) {
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken
                };
                LightBulb.get("/" + appId + "/payments", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getReviews: function (appId, callback) {
            var appAccessToken = LightBulb.applications.getToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken
                };
                LightBulb.get("/" + appId + "/reviews", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getStaticResources: function (appId, callback) {
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken
                };
                LightBulb.get("/" + appId + "/staticresources", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getSubscriptions: function (appId, callback) {
            //http://developers.facebook.com/docs/reference/api/realtime/
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken
                };
                LightBulb.get("/" + appId + "/subscriptions", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        createSubscription: function (parameters, callback) {
            var defaults = {
                appId: "",
                object: "",
                fields: "",
                callbackUrl: "",
                verifyToken: ""
            };
            var params = $.extend(defaults,parameters);
            //http://developers.facebook.com/docs/reference/api/realtime/
            /*Object to monitor - `user`, `permissions`, or `page`. If no object is specified all subscriptions are deleted. */
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken,
                    object: params.object,
                    fields: params.fields,
                    callback_url: params.callbackUrl,
                    verify_token: params.verifyToken
                };
                LightBulb.post("/" + params.appId + "/subscriptions", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        deleteSubscription: function (parameters, callback) {
            var defaults = {
                appId: "", object: ""
            };
            var params = $.extend(defaults,parameters);
            /*Object to monitor - `user`, `permissions`, or `page`. If no object is specified all subscriptions are deleted. */
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken,
                    object: params.object
                };
                LightBulb.remove("/" + params.appId + "/translations", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getTags: function (parameters, callback) {
            var defaults = {
                appId: ""
            };
            var params = $.extend(defaults,parameters);
            var appAccessToken = LightBulb.applications.getToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken
                };
                LightBulb.get("/" + params.appId + "/tagged", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getTranslations: function (parameters, callback) {
            var defaults = {
                appId: ""
            };
            var params = $.extend(defaults,parameters);
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken
                };
                LightBulb.get("/" + parameters.appId + "/translations", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        createTranslation: function (parameters, callback) {
            var defaults = {
                appId: "",
                nativeStrings: ""
            };
            var params = $.extend(defaults,parameters);
            /*native_strings is a JSON-encoded array of strings to translate. Each element of the string array is an object, with text storing the actual string, description storing the description of the text. */
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken,
                    native_strings: params.nativeStrings
                };
                LightBulb.post("/" + params.appId + "/translations", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        deleteTranslations: function (parameters, callback) {
            var defaults = {
                appId: "",
                nativeHashes: ""
            };
            var params = $.extend(defaults,parameters);
            /*native_hashes is a An array of native hashes. The native hash is a unique identifier of the native string and a description and is generated by the Translations application.  */
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken,
                    native_hashes: params.nativeHashes
                };
                LightBulb.remove("/" + params.appId + "/translations", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getScores: function (parameters, callback) {
            var defaults = {
                appId: ""
            };
            var params = $.extend(defaults,parameters);
            /*Must need read_insights permission*/
            var appAccessToken = LightBulb.applications.getToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken
                };
                LightBulb.get("/" + params.appId + "/scores", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        deleteScores: function (parameters, callback) {
            var defaults = {
                appId: ""
            };
            var params = $.extend(defaults,parameters);
            /*Must need read_insights permission*/
            var appAccessToken = LightBulb.applications.getToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken
                };
                LightBulb.remove("/" + params.appId + "/scores", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        getAchievements: function (parameters, callback) {
            var defaults = {
                appId: ""
            };
            var params = $.extend(defaults,parameters);
            /*Must need read_insights permission*/
            var appAccessToken = LightBulb.applications.getAppToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken
                };
                LightBulb.get("/" + parameters.appId + "/achievements", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        createAchievement: function (parameters, callback) {
            var defaults = {
                appId: "",
                achievement: "",
                displayOrder: ""
            };
            var params = $.extend(defaults,parameters);
            /*Must need read_insights permission*/
            var appAccessToken = LightBulb.applications.getToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken,
                    achievement: achievement,
                    display_order: params.displayOrder
                };
                LightBulb.post("/" + params.appId + "/achievements", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        },
        deleteAchievement: function (parameters, callback) {
            var defaults = {
                appId: "",
                achievement: ""
            };
            var params = $.extend(defaults,parameters);
            /*Must need read_insights permission*/
            var appAccessToken = LightBulb.applications.getToken();
            if (appAccessToken) {
                var data = {
                    access_token: appAccessToken,
                    achievement: params.achievement
                };
                LightBulb.remove("/" + params.appId + "/achievements", data, callback);
            } else {
                throw LIGHTBULB_NO_APP_TOKEN;
            }
        }
    };
})(jQuery);