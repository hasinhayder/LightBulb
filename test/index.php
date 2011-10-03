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
<div id="fb-root"></div>
<script type="text/javascript" src="http://connect.facebook.net/en_US/all.js"></script>
<script type="text/javascript" src="../js/lb.core.js?<?php echo time();?>   "></script>
<script type="text/javascript">
$(document).ready(function() {
    $(document).LightBulb({
        apikey:"288048857874241",
        permissions:'publish_stream'
    });
    //$().LightBulb.logout();
});
</script>
</body>
</html>
