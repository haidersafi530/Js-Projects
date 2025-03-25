<?php
    $servername = "localhost";
    $susername = 'root';
    $spassword = "";
    $database = "ajax";

    $conn = new mysqli($servername, $susername, $spassword, $database);

    if($conn->connect_error){
        die("connection failed" . $conn->connect_error);
    }else{
        echo "Database Connected SuccessFully";
    }


    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    $ok = true;
    $messages = array();

    if( !isset($username) || empty($username)){
        $ok = false;
        $messages[] = 'username cannot empty';

    }
    if( !isset($password) || empty($password)){
        $ok = false;
        $messages[] = 'Password cannot empty';
    }
    if( $ok) {
        if($username === 'haider' && $password === 'haider') {
            $ok = true;
            $messages = 'success login!';

        }
        else{
            $ok = false;
            $messages[] = 'incorrect passsword and username combination !';
        }
    }

    echo json_encode(
        array(
            'ok' => $ok,
            'messages' => $messages
        )
    );
?>