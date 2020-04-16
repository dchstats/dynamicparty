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
    echo json_encode($qry);
    echo "<br>";
    $month=$qry['month'];
    
    echo $month;
    $values=$qry['values'];
    $sql="IF EXISTS (SELECT * FROM ytarget WHERE tgtyear='$month') THEN UPDATE ytarget set tgtvalues='$values' WHERE tgtyear ='$month'; ELSE INSERT INTO ytarget (tgtyear,tgtvalues) VALUES('$month','$values'); END IF";
    if($conn->query($sql)===TRUE){
        echo "Data inserted for $month";
        echo "<br>";
    }
    else{
        echo $conn->error;
    }
?>