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

    if(isset($_GET['selectData']))
    {
        $query="SELECT * FROM `ajax_table`";
        if($result = mysqli_query($con, $query))
        {
            $data = "";
            while($row = mysqli_fetch_assoc($result))
            {
                $data.="
                    <tr>
                        <td>$row[username]</td>
                        <td>$row[password]</td>
                    </tr>
                ";
            }
            echo $data;
        }
        else{
            echo 0;
        }
    }

    if(isset($_POST['updateData']))
{
    $query="UPDATE `ajax_table` SET `username`= '$_POST[username]',`password`='$_POST[password]' WHERE `id` = '31'";
    if(mysqli_query($con,$query))
    {
        echo 1;
    }
    else{
        echo 0;
    }
}   

if(isset($_POST['deleteData']))
{
    $query = "DELETE FROM `ajax_table` WHERE `id` = '33'";
    if(mysqli_query($con,$query))
    {
        echo 1;
    }
    else{
        echo 0;
    }
}   

?>