/**
 * Unit Test for lb.core.js
 * @author Rifat Nabi
 */
 
$(function(){
    module("Module LightBulb Core");
    
    function lightBulbInit(cb) {
        $.LightBulb({
            apikey:"288048857874241",
            permissions:'publish_stream, email',
            callback:cb
        });
    }
    
    test("LightBulb Initialization", function() {
        stop();
        
        lightBulbInit(function(data) {
            // console.log(data);
            ok(data.hasOwnProperty('facebookUserId'), 'Logged in successfully with default configuration');
            start();
        });
        
    });
    
});