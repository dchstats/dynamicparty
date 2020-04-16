<?php
    $server="localhost";
    $user="root";
    $pwd="";
    $db="prod";
    $conn = new mysqli($server,$user,$pwd,$db);
    if($conn->connect_error){
        die('Connection Error');
    }
    $qry = json_decode(file_get_contents('php://input'), true);
    $month=$qry['month'];
    echo $month;
    $sql="SELECT tgtvalues FROM mtarget where tgtmonth='$month'";
    $rows=array();
   $res=$conn->query($sql);
   while($r=mysqli_fetch_assoc($res)){
       $rows[]=$r;
   }
   echo "#";
   echo json_encode($rows);
   echo "#";
?>