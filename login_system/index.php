<?php
    require('connection.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div id="logo">
            <h1>Haider</h1>
        </div>
        <div class="sign-in-up">
            <!-- From Uiverse.io by zanina-yassine --> 
            <button type="button" class="button" onclick="popup('login-popup')">LOGIN</button>
            <button type="button" class="button"  onclick="popup('register-popup')">SIGN UP</button>

        </div>
    </header>

    <div class="popup-container" id="login-popup">
        <div class="popup">
            <form method="POST" action="login_register.php">
                <h2>
                    <span>USER LOGIN</span>
                    <button type="reset" onclick="popup('login-popup')">X</button>
                </h2>
                <input type="text" placeholder="email or username" name="email_username">
                <input type="password" placeholder="password" name="password">
                    <button type="submit" class="login-btn" name="login">LOGIN</button>
            </form>
        </div>
    </div>



    <div class="popup-container" id="register-popup">
        <div class="register popup">
            <form method="POST" action="login_register.php">
                <h2>
                    <span>SIGN UP</span>
                    <button type="reset" onclick="popup('register-popup')">X</button>
                </h2>
                <input type="text" placeholder="Full Name" name="full_name">
                <input type="text" placeholder="Username" name="username">
                <input type="email" placeholder="Email" name="email">
                <input type="password" placeholder="password" name="password">  
                    <button type="submit" class="register-btn" name="register">SIGN UP</button>
            </form>
        </div>
    </div>


<script>
    function popup(popup_name)
    {   
        let get_popup = document.getElementById(popup_name);
        if(get_popup.style.display=="flex")
    {
        get_popup.style.display='none';
    }else{
        get_popup.style.display='flex';
    }
    }
</script>
</body>
</html>