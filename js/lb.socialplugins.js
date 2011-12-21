/**
 * Wrapper for social plugins
 *
 * @author M A Hossain Tonu
 */
(function($) {
    LightBulb.socialplugins = {

        getLikeButton: function (parameters) {
            var defaults = {
                href: "",
                sendButton: "",
                layout: "",
                width: "",
                showFaces: "",
                action: "",
                colorScheme: "",
                font: "",
                ref: ""
            };
            var params = $.extend(defaults, parameters);
            return '<div class="fb-like" data-href="' + params.href + '" \
            data-send="' + params.sendButton + '" data-layout="' + params.layout + '" data-width="' + params.width + '" data-show-faces="' + params.showFaces + '" \
            data-action="' + params.action + '"  data-colorscheme="' + params.colorScheme + '"  data-font="' + params.font + '" data-ref="' + params.ref + '"></div>';
        },

        getSendButton: function (href, font, colorScheme, ref) {
            var defaults = {
                href: "",
                font: "",
                colorScheme: "",
                ref: ""
            };
            var params = $.extend(defaults, parameters);
            return '<div class="fb-send" data-href="' + params.href + '" \
             data-font="' + params.font + '" data-colorscheme="' + params.colorScheme + '" data-ref="' + params.ref + '"></div>';
        },

        getComments: function (href, numPosts, width, colorScheme) {
            var defaults = {
                href: "",
                numPosts: "",
                width: "",
                colorScheme: ""
            };
            var params = $.extend(defaults, parameters);

            return '<div class="fb-comments" data-href="' + params.href + '" \
             data-num-posts="' + params.numPosts + '" data-width="' + params.width + '" data-colorscheme="' + params.colorScheme + '" ></div>';
        },

        getActivityFeeds: function (href, width, height, header, colorScheme, linkTarget, borderColor, font, recommendations, ref, maxAge) {
            var defaults = {
                href: "",
                width: "",
                height: "",
                header: "",
                colorScheme: "",
                linkTarget: "",
                borderColor: "",
                font: "",
                recommendations: "",
                ref: "",
                maxAge: ""
            };
            var params = $.extend(defaults, parameters);
            return '<div class="fb-activity" data-site="' + params.href + '" \
                    data-width="' + params.width + '" data-height="' + params.height + '" data-header="' + params.header + '" data-colorscheme="' + params.colorScheme + '" data-linktarget="' + params.linkTarget + '" \
                    data-border-color="' + params.borderColor + '" data-font="' + params.font + '" data-recommendations="' + params.recommendations + '" data-ref="' + params.ref + '" data-max-age="' + params.maxAge + '" ></div>';
        },

        getRecommendations: function (href, width, height, header, colorScheme, linkTarget, borderColor, font, ref, maxAge) {
            var defaults = {
                href: "",
                width: "",
                height: "",
                header: "",
                colorScheme: "",
                linkTarget: "",
                borderColor: "",
                font: "",
                ref: "",
                maxAge: ""
            };
            var params = $.extend(defaults, parameters);
            return '<div class="fb-recommendations" data-site="' + params.href + '" \
                    data-width="' + params.width + '" data-height="' + params.height + '" data-header="' + params.header + '" data-colorscheme="' + params.colorScheme + '" data-linktarget="' + params.linkTarget + '" \
                    data-border-color="' + params.borderColor + '" data-font="' + params.font + '" data-ref="' + params.ref + '" data-max-age="' + params.maxAge + '" ></div>';
        },

        getLikeBox: function (href, width, height, header, colorScheme, showFaces, borderColor, stream, forceWall) {
            var defaults = {
                href: "",
                width: "",
                height: "",
                header: "",
                colorScheme: "",
                showFaces: "",
                borderColor: "",
                stream: "",
                forceWall: ""
            };
            var params = $.extend(defaults, parameters);
            return '<div class="fb-like-box" data-site="' + params.href + '" \
                    data-width="' + params.width + '" data-height="' + params.height + '" data-header="' + params.header + '" data-colorscheme="' + params.colorScheme + '" \
                    data-show-faces="' + params.showFaces + '" data-border-color="' + params.borderColor + '" data-stream="' + params.stream + '" data-force-wall="' + params.forceWall + '"></div>';
        },

        getLoginButton: function (href, width, height, header, colorScheme, showFaces, borderColor, stream, ref) {

            var defaults = {
                href: "",
                width: "",
                height: "",
                header: "",
                colorScheme: "",
                showFaces: "",
                borderColor: "",
                stream: "",
                ref: ""
            };
            var params = $.extend(defaults, parameters);
            return '<div class="fb-like-box" data-site="' + params.href + '" \
                    data-width="' + params.width + '" data-height="' + params.height + '" data-header="' + params.header + '" data-colorscheme="' + params.colorScheme + '" \
                    data-show-faces="' + params.showFaces + '" data-border-color="' + params.borderColor + '" data-stream="' + params.stream + '" data-ref="' + params.ref + '" ></div>';
        },

        getRegistration: function () {

        },

        getFacepile: function (href, appId, size, width, maxRows, colorScheme) {
            var defaults = {
                href: "",
                appId: "",
                size: "",
                width: "",
                maxRows: "",
                colorScheme: ""
            };
            var params = $.extend(defaults, parameters);
            return '<div class="fb-facepile" data-href="' + params.href + '" \
                    data-app-id="' + params.appId + '" data-size="' + params.size + '" data-width="' + params.width + '" data-max-rows="' + params.maxRows + '" data-colorscheme="' + params.colorScheme + '"></div>';
        },

        getLiveStream: function (appId, width, height, xid, viaUrl, alwaysPosttoFriends) {
            var defaults = {
                appId: "",
                width: "",
                height: "",
                xid: "",
                viaUrl: "",
                alwaysPosttoFriends: ""
            };
            var params = $.extend(defaults, parameters);
            return '<div class="fb-live-stream" data-event-app-id="' + params.appId + '" \
                    data-width="' + params.width + '" data-height="' + params.height + '" data-xid="' + params.xid + '" data-via-url="' + params.viaUrl + '" data-always-post-to-friends="' + params.alwaysPosttoFriends + '"></div>';
        }
    };
})(jQuery);