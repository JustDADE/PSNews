<?php

  $dbhost = 'localhost';
  $dbuser = 'root';
  $dbpass = '10rtnm';
  $dbtable = 'psn';

  $connx = mysqli_connect($dbhost, $dbuser, $dbpass, $dbtable) or die ('Error ' . mysqli_error($connx));

?>
