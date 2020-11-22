<?php

class DbManager
{
    private $host = "localhost";
    private $dbname = "SF_Character";
    private $user = "olivier";
    private $pass = "minettes";


    private function dbConnect()
    {
        try
            {
                $db = new PDO("mysql:host=$this->host;dbname=$this->dbname;charset=utf8",$this->user,$this->pass);
            }

        catch (Exception $e)
            {
                die ('Erreur: '.$e->getMessage());
            }
        return $db;
    }

    public function getName($id)
    {
        $db = $this->dbConnect();
        $req = $db->prepare("SELECT nom FROM données WHERE id=:id");
        $req->bindValue(':id',$id);
        $req->execute();
        $data = $req->fetch();
        return $data['nom'];
    }

    public function getStrength($id)
    {
        $db = $this->dbConnect();
        $req = $db->prepare("SELECT strength FROM données WHERE id=:id");
        $req->bindValue(':id',$id);
        $req->execute();
        $data = $req->fetch();
        return $data['strength'];
    }
    public function getSpeed($id)
    {
        $db = $this->dbConnect();
        $req = $db->prepare("SELECT rapidite FROM données WHERE id=:id");
        $req->bindValue(':id',$id);
        $req->execute();
        $data = $req->fetch();
        return $data['rapidite'];
    }
    public function getResistance($id)
    {
        $db = $this->dbConnect();
        $req = $db->prepare("SELECT resistance FROM données WHERE id=:id");
        $req->bindValue(':id',$id);
        $req->execute();
        $data = $req->fetch();
        return $data['resistance'];
    }
    public function getCombo($id)
    {
        $db = $this->dbConnect();
        $req = $db->prepare("SELECT combo FROM données WHERE id=:id");
        $req->bindValue(':id',$id);
        $req->execute();
        $data = $req->fetch();
        return $data['combo'];
    }
    public function getStory($id)
    {
        $db = $this->dbConnect();
        $req = $db->prepare("SELECT story FROM données WHERE id=:id");
        $req->bindValue(':id',$id);
        $req->execute();
        $data = $req->fetch();
        return $data['story'];
    }



}