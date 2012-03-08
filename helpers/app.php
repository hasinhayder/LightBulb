<?php
$appId = $_POST['appid'];
$appSecret = $_POST['secret'];
$url = "https://graph.facebook.com/oauth/access_token?client_id={$appId}&client_secret={$appSecret}&grant_type=client_credentials&http%3A%2F%2Ffacebook.com";
//echo $url;
$token = file_get_contents($url);
$tokenParts = explode("=",$token);
//print_r($tokenParts);
echo $tokenParts[1];
?>