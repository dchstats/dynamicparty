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
    $sql="IF EXISTS (SELECT * FROM mtarget WHERE tgtmonth='$month') THEN UPDATE mtarget set tgtvalues='$values' WHERE tgtmonth ='$month'; ELSE INSERT INTO mtarget (tgtmonth,tgtvalues) VALUES('$month','$values'); END IF";
    if($conn->query($sql)===TRUE){
        echo "Data inserted for $month";
        echo "<br>";
    }
    else{
        echo $conn->error;
    }
?>