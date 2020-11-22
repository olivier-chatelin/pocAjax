<?php
 
  require_once('DbManager.php');
 
function displayName($id)
{
  $dbManager = new DbManager();
  
  $name = $dbManager->getName($id);
  return $name;
  
}
function displayStrength($id){ 
  $dbManager = new DbManager();
  $strength = $dbManager->getStrength($id);
  return $strength;

}
function displaySpeed($id){ 
  $dbManager = new DbManager();
  $speed = $dbManager->getSpeed($id);
  return $speed;

}
function displayResistance($id){ 
  $dbManager = new DbManager();
  $resistance = $dbManager->getResistance($id);
  return $resistance;

}
function displayCombo($id){ 
  $dbManager = new DbManager();
  $combo = $dbManager->getCombo($id);
  return $combo;

}
function displayStory($id){ 
  $dbManager = new DbManager();
  $story = $dbManager->getStory($id);
  return $story;
}

if( isset($_GET['id'])){
  $id = $_GET['id'];
  $o = new stdClass();
  header('content-type: application/json');
  $o->name = displayName($id);
  $o->story = displayStory($id);
  $o->strength = displayStrength($id);
  $o->speed = displaySpeed($id);
  $o->resistance = displayResistance($id);
  $o->combo = displayCombo($id);

  echo json_encode($o);


  
}