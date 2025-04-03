<?php
    $con = mysqli_connect('localhost','root','', 'test');
     

    if(isset($_POST['insertData']))
{
    $query="INSERT INTO `ajax_table`(`username`, `password`)
     VALUES ('$_POST[username]','$_POST[password]')";
    if(mysqli_query($con,$query))
    {
        echo 1;
    }
    else{
        echo 0;
    }
     
}

?>