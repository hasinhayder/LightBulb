/**
 * LightBulb is a wrapper on top of Facebook JS-SDK for Graph API
 * LightBulb makes performing the most common tasks even easier.
 * @version: 1.00
 */
(function($) {
    var opts;
    var fbdata = {};
    $.fn.LightBulb = function(options) {
        var defaults = {
            apikey:"",
            secret:"",
            login:"true",
            permissions:"",
            cookie:true,
            xfbml:true,
            callback:function(){}
        };
        opts = $.extend(defaults, options);
        //if (!$("#fb-root")) $("<div/>").attr("id", "fb-root").appendTo("body");
        FB.init({appId: opts.apikey, status: true, cookie: opts.cookie, xfbml: opts.xfbml});
        FB.Event.subscribe('auth.sessionChange', function(response) {
            if (response.session) {
                var session = FB.getSession();
                fbdata.accessToken = session.access_token;
                fbdata.facebookUserId = session.uid;
            }
        });

        FB.getLoginStatus(function(response) {
            if (response.session) {
                var session = FB.getSession();
                fbdata.accessToken = session.access_token;
                fbdata.facebookUserId = session.uid;
                if(jQuery.isFunction(opts.callback)) opts.callback.call(this, fbdata);
            }
            else {
                if (opts.login)
                    $.fn.LightBulb.login();
            }
        });

    }

    $.fn.LightBulb.login = function() {
        alert("Calling Auth");
        FB.login(function(response) {
            if (response.session) {
                var session = FB.getSession();
                fbdata.accessToken = session.access_token;
                fbdata.facebookUserId = session.uid;
                if(jQuery.isFunction(opts.callback)) opts.callback.call(this, fbdata);
            }
        }, {perms:opts.permissions});
    }

    $.fn.LightBulb.logout = function() {
        FB.logout(function(response) {
            if (response) {
                fbdata.accessToken = 0;
                fbdata.facebookUserId = 0;
            }
        });
    }

    $.fn.LightBulb._getOptins = function() {
        return opts;
    }

    $.fn.LightBulb._getFacebookData = function() {
        return fbdata;
    }

    $.fn.LightBulb.isLoggedIn = function() {
        return fbdata.facebookUserId;
    }
})(jQuery);