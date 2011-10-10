<?php
/**
 * @author Hasin Hayder
 * Helper library to help uploading Pictures to Facebook Albums and User Profiles
 * cache folder must have write access
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
$source = $_POST['source'];
$message = $_POST['message'];
$sourceId = $_POST['source_id'];
$filehash = md5($token . time() . $source);
file_put_contents("./cache/{$filehash}", file_get_contents($source));
$data = array("access_token" => $token, "message" => $message, "source" => "@./cache/{$filehash}");
$result = $fb->api("/{$sourceId}/photos", "post", $data);
$facebookPhotoId = $result['id'];
echo $facebookPhotoId;

?>