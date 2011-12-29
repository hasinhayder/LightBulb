/**
 * Unit Test for lb.core.js
 * @author Rifat Nabi
 */
 
$(function(){
    
    var FB_API_KEY = "288048857874241";
    
    module("Module LightBulb Core");
    
    test("Initialization", function() {
        stop();
        LightBulb({apikey: FB_API_KEY, permissions: "publish_stream",
            callback: function(data) {
                ok(data, "Got response via callback");
                start();
            }
        });
    });
    
    test("Methods", function() {
        ok(!$.isEmptyObject(LightBulb._getOptions()), "“LightBulb.getOptions()” returned an object");
        ok(!$.isEmptyObject(LightBulb._getFacebookData()), "“LightBulb.getFacebookData()” returned an object");
        ok(LightBulb.isLoggedIn(), "“LightBulb.isLoggedIn()” returned true");
    });
    
});