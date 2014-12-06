<?php
include 'config.php';

$status = $_GET['status'];

if ($status == 'comingsoon') {
  $q = "SELECT * FROM games WHERE releasetime > NOW() ORDER BY releasetime ASC LIMIT 5";
} else if ($status == 'recent') {
  $q = "SELECT * FROM games WHERE releasetime < NOW() ORDER BY releasetime DESC LIMIT 5";
}

$result = $connx->query($q);


$arr = array();

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $arr[] = $row;
  }
}

echo $json_response = json_encode($arr);

?>
