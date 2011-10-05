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
<h3>Events</h3>

<p>Ask for permissions <input type="button" value="Permission for Events" onclick="askForPermission('create_event')"/>
</p>

<p>Create an event <input type="button" value="Create Event" onclick="createEvent()"/></p>

<h3>Albums</h3>

<p>Ask for permissions <input type="button" value="Permission for Events" onclick="askForPermission('user_photos, publish_stream')"/>
<p>Create an album <input type="button" value="Create Album" onclick="createAlbum()"/>
<p>Upload a picture <input type="button" value="Upload Picture" onclick="uploadPicture()"/>
</p>

<h3>Dialogs</h3>
<p>Ask for permissions <input type="button" value="Permission for Feed" onclick="askForPermission('user_photos, publish_stream')"/>
<p>Publish a feed <input type="button" value="Publish Feed" onclick="publishFeed()"/></p>
<p>Prompt a friend dialog <input type="button" value="Prompt Friend Dialog" onclick="makeFriend()"/></p>
<p>Send app request to a friend <input type="button" value="Send Request" onclick="sendRequestToOneFriend()"/></p>
<p>Send app request to many friends <input type="button" value="Send Requests" onclick="sendRequestToMultipleFriends()"/></p>
<p>Send Message <input type="button" value="Send Message" onclick="sendMessage()"/></p>

<h3>Group</h3>
<p>Ask for permissions <input type="button" value="Permission for Group" onclick="askForPermission('user_groups,friends_groups,publish_stream')"/>
<p>Post a Message In a group <input type="button" value="Post Message" onclick="postMessageinGroup();"/>


<div id="fb-root"></div>
<script type="text/javascript" src="http://connect.facebook.net/en_US/all.js"></script>
<script type="text/javascript" src="../js/lb.lang.js?<?php echo time();?>   "></script>
<script type="text/javascript" src="../js/lb.core.js?<?php echo time();?>   "></script>
<script type="text/javascript" src="../js/lb.events.js?<?php echo time();?>   "></script>
<script type="text/javascript" src="../js/lb.albums.js?<?php echo time();?>   "></script>
<script type="text/javascript" src="../js/lb.dialogs.js?<?php echo time();?>   "></script>
<script type="text/javascript" src="../js/lb.group.js?<?php echo time();?>   "></script>
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

    function createEvent() {
        $.LightBulb.events.create("me", "LightBulb Event", "Dhaka", "12 Nov, 2011", "13 Nov, 2011", "Some freaking event information", "OPEN", function(resp) {
            alert(resp.toSource());
        })
    }

    function createAlbum() {
        $.LightBulb.albums.createAlbum("me","","My Test Album 2","Some Album Description","Dhaka","","",function(resp){
            console.log(resp);
            alert(resp.toSource());
        });
    }


    function uploadPicture(){
        var albumId = 224262897633185;
        $.LightBulb.albums.addPhoto(albumId,"http://2.s3.envato.com/files/6413565/0.__large_preview.png","Hellow World",function(resp){
            alert(resp);
        });
    }

    function publishFeed(){
        $.LightBulb.dialogs.publishFeed("","","My feed","My Caption","http://google.com","My Description","","","","",function(resp){
            alert(resp.toSource());
        })
    }
     function postMessageinGroup()
    {
        var groupId = '132233363545259';
        var message ='Hello ! Everyone how are you ?.';
        $.LightBulb.group.postStatus(groupId,message,function(resp){
            alert(resp.toSource());
        });
    }

    function makeFriend(){
        var friendId = "734961309";
        $.LightBulb.dialogs.makeFriend(friendId,"");
    }

    function sendRequestToOneFriend(){
        var friendId = "682334189";
        var message = "Hey, come and join us";
        var title = "Come Join Us"
        $.LightBulb.dialogs.makeRequestToOneFriend(friendId,message,title,"",function(resp){
            alert(resp.toSource());
        });
    }
    function sendRequestToMultipleFriends(){
        var message = "Hey, come and join us";
        var title = "Come Join Us"
        $.LightBulb.dialogs.makeRequestToMultipleFriends(message,title,"","",20,"",function(resp){
            alert(resp.toSource());
        });
    }
    function sendMessage(){
        var friendId = "682334189";
        var message = "Hey, come and join us";
        var title = "Come Join Us";
        var link = "http://google.com";
        var picture = "http://2.s3.envato.com/files/6413565/0.__large_preview.png";
        $.LightBulb.dialogs.sendMessage(friendId,link,message,picture,title,"",function(resp){
            alert(resp.toSource());
        })
    }
</script>
</body>
</html>
