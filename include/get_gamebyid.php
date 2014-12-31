<?php
include 'config.php';

$q = "SELECT * FROM games WHERE id == $_GET['id']";
$result = $connx->query($q);


$arr = array();

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $arr[] = $row;
  }
}

echo $json_response = json_encode($arr);

?>
