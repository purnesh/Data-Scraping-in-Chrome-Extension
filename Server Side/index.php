<?php
/**
 * @author Purnesh Tripathi <purnesh.xyz@gmail.com> 
 */

$url = "http://www.quora.com/How-can-we-make-a-Chrome-Extension-using-data-scraped-via-PHP-Is-it-possible";
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$curl_scraped_page = curl_exec($ch);
curl_close($ch);
echo $curl_scraped_page;

?>
