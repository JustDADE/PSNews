<?php
  //$url = "https://store.sonyentertainmentnetwork.com/store/api/chihiro/00_09_000/container/US/en/999/STORE-MSF77008-PSPLUSFREEGAMES";
  $url = "https://store.sonyentertainmentnetwork.com/store/api/chihiro/00_09_000/container/US/en/999/STORE-MSF77008-PSPLUSFREEGAMES?platform=ps4";
  $data = file_get_contents($url);
  echo $data;
?>
