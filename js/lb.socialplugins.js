/**
 * Wrapper for social plugins
 *
 * @author M A Hossain Tonu
 */
(function(){
    LightBulb.socialplugins = {

        getLikeButton: function( href, sendButton, layout, width, showFaces, action, colorScheme, font, ref ){
            return '<div class="fb-like" data-href="'+href+'" \
            data-send="'+sendButton+'" data-layout="'+layout+'" data-width="'+width+'" data-show-faces="'+showFaces+'" \
            data-action="'+action+'"  data-colorscheme="'+colorScheme+'"  data-font="'+font+'" data-ref="'+ref+'"></div>';
        },

        getSendButton: function( href, font, colorScheme, ref ){
            return '<div class="fb-send" data-href="'+href+'" \
             data-font="'+font+'" data-colorscheme="'+colorScheme+'" data-ref="'+ref+'"></div>';
        },

        getComments: function( href, numPosts, width, colorScheme ){
            return '<div class="fb-comments" data-href="'+href+'" \
             data-num-posts="'+numPosts+'" data-width="'+width+'" data-colorscheme="'+colorScheme+'" ></div>';
        },

        getActivityFeeds: function(href, width, height, header, colorScheme, linkTarget, borderColor, font, recommendations, ref, maxAge){
            return '<div class="fb-activity" data-site="'+href+'" \
                    data-width="'+width+'" data-height="'+height+'" data-header="'+header+'" data-colorscheme="'+colorScheme+'" data-linktarget="'+linkTarget+'" \
                    data-border-color="'+borderColor+'" data-font="'+font+'" data-recommendations="'+recommendations+'" data-ref="'+ref+'" data-max-age="'+maxAge+'" ></div>';
        },

        getRecommendations: function(href, width, height, header, colorScheme, linkTarget, borderColor, font, ref, maxAge){
            return '<div class="fb-recommendations" data-site="'+href+'" \
                    data-width="'+width+'" data-height="'+height+'" data-header="'+header+'" data-colorscheme="'+colorScheme+'" data-linktarget="'+linkTarget+'" \
                    data-border-color="'+borderColor+'" data-font="'+font+'" data-ref="'+ref+'" data-max-age="'+maxAge+'" ></div>';
        },

        getLikeBox: function(href, width, height, header, colorScheme, showFaces, borderColor, stream, forceWall){
            return '<div class="fb-like-box" data-site="'+href+'" \
                    data-width="'+width+'" data-height="'+height+'" data-header="'+header+'" data-colorscheme="'+colorScheme+'" \
                    data-show-faces="'+showFaces+'" data-border-color="'+borderColor+'" data-stream="'+stream+'" data-force-wall="'+forceWall+'"></div>';
        },

        getLoginButton: function(href, width, height, header, colorScheme, showFaces, borderColor, stream, ref){
            return '<div class="fb-like-box" data-site="'+href+'" \
                    data-width="'+width+'" data-height="'+height+'" data-header="'+header+'" data-colorscheme="'+colorScheme+'" \
                    data-show-faces="'+showFaces+'" data-border-color="'+borderColor+'" data-stream="'+stream+'" data-ref="'+ref+'" ></div>';
        },

        getRegistration: function(){

        },

        getFacepile: function(href, appId, size, width, maxRows, colorScheme){
            return '<div class="fb-facepile" data-href="'+href+'" \
                    data-app-id="'+appId+'" data-size="'+size+'" data-width="'+width+'" data-max-rows="'+maxRows+'" data-colorscheme="'+colorScheme+'"></div>';
        },

        getLiveStream: function(appId, width, height, xid, viaUrl, alwaysPosttoFriends){
            return '<div class="fb-live-stream" data-event-app-id="'+appId+'" \
                    data-width="'+width+'" data-height="'+height+'" data-xid="'+xid+'" data-via-url="'+viaUrl+'" data-always-post-to-friends="'+alwaysPosttoFriends+'"></div>';
        }
    }
})();