<?php
include 'config.php';

$gameTitle = $_GET['title'];

if ($gameTitle) {
  $q = "SELECT * FROM games WHERE title LIKE '%".$gameTitle."%'";
} else {
  $q = "SELECT * FROM games WHERE releasetime > NOW() ORDER BY releasetime ASC";
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
