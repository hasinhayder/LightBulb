/**
 * jQFB is a wrapper on top of Facebook JS-SDK for Graph API
 * jQFB makes performing the most common tasks even easier.
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
            xfbml:true
        };
        opts = $.extend(defaults, options);
        //if (!$("#fb-root")) $("<div/>").attr("id", "fb-root").appendTo("body");
        FB.init({appId: opts.apikey, status: true, cookie: opts.cookie, xfbml: opts.xfbml});
        FB.Event.subscribe('auth.sessionChange', function(response) {
            if (response.session) {
                var session = FB.getSession();
                fbdata.fbtoken = session.access_token;
                fbdata.facebookUserId = session.uid;
            }
        });

        FB.getLoginStatus(function(response) {
            if (response.session) {
                var session = FB.getSession();
                fbdata.fbtoken = session.access_token;
                fbdata.facebookUserId = session.uid;
            }
            else {
                if (opts.login)
                    $.fn.LightBulb.login();
            }
        });

    }

    $.fn.LightBulb.login = function() {
        alert("Called");
        FB.login(function(response) {
            if (response.session) {
                var session = FB.getSession();
                fbdata.fbtoken = session.access_token;
                fbdata.facebookUserId = session.uid;
            }
        }, {perms:opts.permissions});
    }

    $.fn.LightBulb.logout = function() {
        FB.logout(function(response) {
            if (response) {
                fbdata.fbtoken = 0;
                fbdata.facebookUserId = 0;
            }
        });
    }
})(jQuery);