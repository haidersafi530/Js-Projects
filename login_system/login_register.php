<?php
    require('connection.php');

    //for login 
if (isset($_POST['login'])) {
    $email_username = $_POST['email_username'];
    $password = $_POST['password'];

    $query = "SELECT * FROM `register_users` WHERE `email` = '$email_username' OR `username` = '$email_username'";
    $result = mysqli_query($con, $query);

    if ($result) {
        if (mysqli_num_rows($result) == 1) {
            $result_fetch = mysqli_fetch_assoc($result);
            if ($password == $result_fetch['password']) {
                // If correct
                echo "
                <script>
                    alert('Login successful!');
                    window.location.href='dashboard.html';
                </script>";
            } else {
                // If incorrect password
                echo "
                <script>
                    alert('Incorrect password!');
                    window.location.href='index.php';
                </script>";
            }
        } else {
            // No user found
            echo "
            <script>
                alert('User not found!');
                window.location.href='index.php';
            </script>";
        }
    } else {
        // Query failed
        echo "
        <script>
            alert('Cannot run query!');
            window.location.href='index.php';
        </script>";
    }
}



    if(isset($_POST['register']))
    {
        $user_exist_query = "SELECT * FROM `register_users` WHERE `username` = '$_POST[username]' OR `email` = '$_POST[email]'";
        $result = mysqli_query($con,$user_exist_query);

        if($result)
        {
            if(mysqli_num_rows($result)>0)
            {
                //if any user has already exist or email
                $result_fetch = mysqli_fetch_assoc($result);
                if($result_fetch['username']==$_POST['username'])
                {
                    echo "
                    <script>
                        alert('$result_fetch[usernmae] - username already taken');
                        window.location.href='index.php';
                    </script>";
                }
                else{
                    echo "
                    <script>
                        alert('$result_fetch[email] - username already taken');
                        window.location.href='index.php';
                    </script>";
                }
            }
            else //if ye tab ecucute hota hai jab yahan koi nhi lia ho username or email ki bat karraha main
            {
                $query = "INSERT INTO `register_users`(`full_name`, `username`, `email`, `password`) VALUES ('$_POST[full_name]','$_POST[username]','$_POST[email]','$_POST[password]')";
                if(mysqli_query($con,$query))
                {   
                    //if data inserted succesfully
                    echo "
                    <script>
                        alert('Registration Successfull');
                        window.location.href='index.php';
                    </script>";
                }
                else
                {
                    //if data cannot be inserted
                    echo "
                    <script>
                        alert('Cannot run query');
                        window.location.href='index.php';
                    </script>";
                }   
            }
        }
        else{
            echo "
            <script>
                alert('Cannot run query');
                window.location.href='index.php';
            </script>";
        }
    }
?>