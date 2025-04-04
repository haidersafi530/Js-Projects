<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajax Crud Using Ajax</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
 <div class="form-box">
 <!-- From Uiverse.io by zombie223 --> 
<form class="form">
    <p>AJAX FORM</p>
    <div class="group">
      <input required="true" class="main-input" type="text" id="username">
      <span class="highlight-span"></span>
      <label class="lebal-email">Email</label>
    </div>
    <div class="container-1">
      <div class="group">
        <input required="true" class="main-input" type="password" id="password">
        <span class="highlight-span"></span>
        <label class="lebal-email">password</label>
      </div>
    </div>
    <!-- From Uiverse.io by faxriddin20 --> 
    <div id="gap"></div>
    <button type="button" class="ui-btn" id="btn-submit">
    <span> Submit </span>
    </button>
  </form>
  </div>

  <!-- Table -->
  <div class="data">
    <table>
      <thead>
        <th>Username</th>
        <th>Password</th>
      </thead>
      <tbody id="tbody">
          
      </tbody>
    </table>
  </div>

<!-- Perform by haider -->
    <script src="script.js"></script>
</body>
</html>