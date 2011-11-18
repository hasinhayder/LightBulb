<?php
/**
 * Created by JetBrains PhpStorm.
 * User: hasinhayder
 * Date: 10/3/11
 * Time: 4:28 PM
 * To change this template use File | Settings | File Templates.
 */
?>
<!html>
<head>
    <title>Project LightBulb - The Easiest wrapper for Facebook JS-SDK </title>

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>

</head>
<body>
<h3>FQL Test</h3>
<input type="button" onclick="runFQL()" value="Run FQL"/>

<h3>Events</h3>

<p>Ask for permissions <input type="button" value="Permission for Events" onclick="askForPermission('create_event')"/>
</p>

<p>Create an event <input type="button" value="Create Event" onclick="createEvent2()"/></p>

<h3>Albums</h3>

<p>Ask for permissions <input type="button" value="Permission for Events"
                              onclick="askForPermission('user_photos, publish_stream')"/>

<p>Create an album <input type="button" value="Create Album" onclick="createAlbum()"/>

<p>Upload a picture <input type="button" value="Upload Picture" onclick="uploadPicture()"/>
</p>

<h3>Dialogs</h3>

<p>Ask for permissions <input type="button" value="Permission for Feed"
                              onclick="askForPermission('user_photos, publish_stream')"/>

<p>Publish a feed <input type="button" value="Publish Feed" onclick="publishFeed()"/></p>

<p>Prompt a friend dialog <input type="button" value="Prompt Friend Dialog" onclick="makeFriend()"/></p>

<p>Send app request to a friend <input type="button" value="Send Request" onclick="sendRequestToOneFriend()"/></p>

<p>Send app request to many friends <input type="button" value="Send Requests"
                                           onclick="sendRequestToMultipleFriends()"/></p>

<p>Send Message <input type="button" value="Send Message" onclick="sendMessage()"/></p>

<h3>Group</h3>

<div id="groups"> </div>
<p>Ask for permissions <input type="button" value="Permission for Group" onclick="askForPermission('user_groups,friends_groups,publish_stream')"/>
<p>Get Group Information <input type="button" value="Get Group Info" onclick="getGroup();"/>
<p>Create Statuses In a group <input type="button" value="Post Message" onclick="postMessageinGroup();"/>
<p>Posts Link In a group <input type="button" value="Share Link" onclick="postLinkinGroup();"/>    

<h3>apps</h3>

<div id="apps"> </div>
<p>Ask for permissions <input type="button" value="Permission for App" onclick="askForPermission('manage_pages')"/>
<p>Get Test Accounts <input type="button" value="Get Test Accounts" onclick="getAccounts();"/>
<p>Get App Access Token <input type="button" value="Get App Access Token" onclick="getAppToken();"/>


<div id="fb-root"></div>
<script type="text/javascript" src="http://connect.facebook.net/en_US/all.js"></script>
<script type="text/javascript" src="../js/lb.lang.js?<?php echo time();?>   "></script>
<script type="text/javascript" src="../js/lb.core.js?<?php echo time();?>   "></script>
<script type="text/javascript" src="../js/lb.events.js?<?php echo time();?>   "></script>
<script type="text/javascript" src="../js/lb.albums.js?<?php echo time();?>   "></script>
<script type="text/javascript" src="../js/lb.dialogs.js?<?php echo time();?>   "></script>
<script type="text/javascript" src="../js/lb.groups.js?<?php echo time();?>   "></script>
<script type="text/javascript" src="../js/lb.applications.js?<?php echo time();?>   "></script>
<script type="text/javascript" src="../js/lb.users.js?<?php echo time();?>   "></script>
<script type="text/javascript">
    $(document).ready(function() {
        $.LightBulb({
            apikey:"288048857874241",
            permissions:'publish_stream, create_event',
            callback:function(data) {
                /*$.LightBulb.events.create("me","LightBulb Event","Dhaka","12 Nov, 2011","13 Nov, 2011","Some freaking event information","OPEN",function(resp){
                    alert(resp.toSource());
                })*/
            }
        });


        //$.LightBulb.logout();
    });

    function askForPermission(perms) {
        $.LightBulb({
            apikey:"288048857874241",
            permissions:perms,
            forcedPermission:true,
            callback:function(data) {

            }
        });
    }

    function createEvent2() {
        alert("Me");
        $.LightBulb.events.create("me", "LightBulb Event", "Dhaka", "12 Nov, 2011", "13 Nov, 2011", "Some freaking event information", "OPEN", function(resp) {
            alert(resp.toSource());
        })
    }

    function createAlbum() {
        $.LightBulb.albums.createAlbum("me", "", "My Test Album 2", "Some Album Description", "Dhaka", "", "", function(resp) {
            console.log(resp);
            alert(resp.toSource());
        });
    }


    function uploadPicture() {
        var albumId = 224262897633185;
        $.LightBulb.albums.addPhoto(albumId, "http://2.s3.envato.com/files/6413565/0.__large_preview.png", "Hellow World", function(resp) {
            alert(resp);
        });
    }

    function publishFeed() {
        $.LightBulb.dialogs.publishFeed("", "", "My feed", "My Caption", "http://google.com", "My Description", "", "", "", "", function(resp) {
            alert(resp.toSource());
        })
    }
    function postMessageinGroup() {
        var groupId = '132233363545259';
        var message ='Hello ! Everyone how are you ?.';
        $.LightBulb.groups.createStatuses(groupId,message,function(resp){
            alert(resp.toSource());
        });
    }

    function makeFriend() {
        var friendId = "734961309";
        $.LightBulb.dialogs.makeFriend(friendId, "");
    }

    function sendRequestToOneFriend() {
        var friendId = "682334189";
        var message = "Hey, come and join us";
        var title = "Come Join Us"
        $.LightBulb.dialogs.makeRequestToOneFriend(friendId, message, title, "", function(resp) {
            alert(resp.toSource());
        });
    }
    function sendRequestToMultipleFriends() {
        var message = "Hey, come and join us";
        var title = "Come Join Us"
        $.LightBulb.dialogs.makeRequestToMultipleFriends(message, title, "", "", 20, "", function(resp) {
            alert(resp.toSource());
        });
    }
    function sendMessage() {
        var friendId = "682334189";
        var message = "Hey, come and join us";
        var title = "Come Join Us";
        var link = "http://google.com";
        var picture = "http://2.s3.envato.com/files/6413565/0.__large_preview.png";
        $.LightBulb.dialogs.sendMessage(friendId, link, message, picture, title, "", function(resp) {
            alert(resp.toSource());
        })
    }

    
     function postLinkinGroup()
    {
        var groupId = '132233363545259';
         var link    ='http://www.bdnews24.com/details.php?cid=2&id=208713&hb=1';
        var message ='Rich Govt !';
        
        $.LightBulb.groups.createLinks(groupId,link,message,function(resp){
            alert(resp.toSource());
            
            
            
        });
    }
    
    function getGroup()
    {
         var groupId = '132233363545259';
         
        
        $.LightBulb.groups.getGroup(groupId,function(resp){
            //alert(resp.toSource());
            var html ='';
            $.each(resp, function(index, value) { 
                //console.log(index + ': ' + value); 
                
                if (index=='owner')
                    {
                      value = value.name;  
                    }
                
                html +=index + ': ' + value + '<br />';
            });
            
            $('#groups').html(html);
            
            
        });

    }

    function getAccounts(){
        //LightBulb.applications.setToken("289943114353309|qfX1F3K3ECZm9YLozkc4u1AIMdE");
        /*LightBulb.users.getAccounts("me",function(resp){
            console.log(resp);
        })*/
        LightBulb.applications.getTestAccounts("289943114353309",function(resp){
            alert(console.log(resp));
        })
    }

    function getAppToken(){
        LightBulb.applications.fetchAppToken('289943114353309','223e83d880ab2c1d46f4e4365c15f3da',function(resp){
            LightBulb.applications.setAppToken(resp);
            //LightBulb.applications.getR
        })
    }
</script>
</body>
</html>
