/**
 * @author Hasin Hayder
 * LightBulb is a wrapper on top of Facebook JS-SDK for Graph API
 * LightBulb makes performing the most common tasks even easier.
 * @version: 1.00
 */
var LightBulb;
(function($) {
    var opts;
    var fbdata = {};
    var deferred = $.Deferred();
    
    LightBulb = function(options) {
        var defaults = {
            apikey:"",
            secret:"",
            login: "true",
            permissions:"",
            cookie:true,
            xfbml:true,
            forcedPermission:false,
            callback:function() {
            },
            authResponseChange:function(){
            }
        };
        opts = $.extend(defaults, options);
        //if (!$("#fb-root")) $("<div/>").attr("id", "fb-root").appendTo("body");
        FB.init({appId: opts.apikey, status: true, cookie: opts.cookie, xfbml: opts.xfbml});
        FB.Event.subscribe('auth.authResponseChange', function(response){
            if (response.authResponse) {
                var session = response.authResponse;
                fbdata.accessToken = session.accessToken;
                fbdata.facebookUserId = session.userID;
                if ($.isFunction(opts.authResponseChange)) opts.authResponseChange.call(this, fbdata);
                deferred.resolve(session, fbdata);
            }
        });

        FB.getLoginStatus(function(response) {
            if (opts.forcedPermission) {
                LightBulb.login();

            } else if (response.authResponse) {
                var session = response.authResponse;
                fbdata.accessToken = session.accessToken;
                fbdata.facebookUserId = session.userID;
                if ($.isFunction(opts.callback)) opts.callback.call(this, fbdata);
                deferred.resolve(session, fbdata);

            } else {
                if (opts.login) {
                    LightBulb.login();
                }
            }
        });
    };

    /**
     * @author Hasin Hayder
     * Perform a Facebook login and prompt the authentication dialog
     */
    LightBulb.login = function() {
        //alert("Calling Auth");
        FB.login(function(response) {
            if (response.authResponse) {
                var session = response.authResponse;
                fbdata.accessToken = session.accessToken;
                fbdata.facebookUserId = session.userID;
                if ($.isFunction(opts.callback)) opts.callback.call(this, fbdata);
            }
        }, {scope:opts.permissions});

        return deferred.promise();
    };

    /**
     * @author Hasin Hayder
     * Log out the currently active user from Facebook
     */
    LightBulb.logout = function(callback) {
        var dfr = $.Deferred();
        FB.logout(function(response) {
            //LightBulb.log(response);

            if (response) {
                fbdata.accessToken = 0;
                fbdata.facebookUserId = 0;
                dfr.resolve(response);
            }
            if ($.isFunction(callback)) callback.call(this, response);
        });
        return dfr.promise();
    };

    /**
     * @author Hasin Hayder
     * Return the parameters which was passed to this plugin while initializing
     */
    LightBulb._getOptions = function() {
        return opts;
    };

    /**
     * @author Hasin Hayder
     * Return the currently authenticated and logged in users access token and Facebook user id
     */
    LightBulb._getFacebookData = function() {
        return fbdata;
    };

    /**
     * @author Hasin Hayder
     * Return true if there is currently any active user logged in with this application
     */
    LightBulb.isLoggedIn = function() {
        LightBulb.log('is Logged in - ' + fbdata.facebookUserId);
        return fbdata.facebookUserId && fbdata.facebookUserId > 0;
    };

    /**
     * Determine whether the defined method is function or not.
     * Type of should return 'function'
     * @param func object which needs to be checked.
     */
    LightBulb.isFunction = function(func) {
        return (func && typeof(func) == 'function');
    };

    LightBulb.get = function(openGraphPath, data, callback){
        //alert(openGraphPath);
        FB.api(openGraphPath, 'get', data, function(response) {
            if ($.isFunction(callback)) callback.call(this, response);
        });
    };

    LightBulb.post = function(openGraphPath, data, callback){
        FB.api(openGraphPath, 'post', data, function(response) {
            if ($.isFunction(callback)) callback.call(this, response);
        });
    };

    LightBulb.delete = function(openGraphPath, data, callback){
        FB.api(openGraphPath, 'delete', data, function(response) {
            if ($.isFunction(callback)) callback.call(this, response);
        });
    }

    /**
    * writes to console if console is enabled
    *
    * @author M A Hossain Tonu
    *
    **/
    LightBulb.log = function() {
        var msg = arguments;
        if (window.console && window.console.log) {
            window.console.log(msg);
        }
        else if (window.opera && window.opera.postError) {
            window.opera.postError(msg);
        }
    };

    if (typeof($) != 'undefined') {
        // Associate this LightBulb as jquery extension
        $.LightBulb = LightBulb;
    }
})(jQuery);