<?php
/**
 * @author Hasin Hayder
 * This is a helper scipt which will help uploading profile picture to events wall
 */
include_once("key.php");
include_once("fb-sdk/facebook.php");

$fb = new Facebook(array(
                        'appId' => FACEBOOOK_APP_ID,
                        'secret' => FACEBOOK_APP_SECRET,
                        'cookie' => false,
                        'fileUpload' => true // this is important !
                   ));

$token = $_POST['access_token'];
if ($token) $fb->setAccessToken($token);
$task = $_GET['what'];
switch ($task) {
    case "createevent":
        $name = $_POST['name'];
        $token = $_POST['access_token'];
        $startTime = $_POST['start_time'];
        $endTime = $_POST['end_time'];
        $location = $_POST['location'];
        $description = $_POST['description'];
        $picture = $_POST['picture'];
        $userId = $_POST['user'];
        $filehash = md5($token . time() . $picture);
        file_put_contents("./cache/{$filehash}", file_get_contents($source));
        $data = array("name" => $name,
                      "access_token" => $token,
                      "start_time" => $startTime,
                      "end_time" => $endTime,
                      "location" => $location,
                      "description" => $description,
                      "profile.jpg" => "@./cache/{$filehash}"
        );
        $result = $fb->api("/{$userId}/events", "post", $data);
        $facebookEventId = $result['id'];
        echo $facebookEventId;
        break;
    default:
        break;
}
?>