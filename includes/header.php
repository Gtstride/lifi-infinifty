<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./styles/header.css">
    <link rel="stylesheet" href="./styles/footer.css">
    <link rel="stylesheet" href="./styles/index.css">
    <link rel="stylesheet" href="./styles/about-us.css">
    <link rel="stylesheet" href="./styles/services.css">
    <link rel="stylesheet" href="./styles/products.css">
    <link rel="stylesheet" href="./styles/contact-us.css" />
    <link rel="stylesheet" href="./styles/querie.css" />
    <script
        src="https://kit.fontawesome.com/47c9f80a38.js"
        crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>

<body>
    <img id="logo2" src="./assets/images/logo.svg" alt="LiFi logo">
    <header id="header">
        <img id="logo" src="./assets/images/logo.svg" alt="LiFi logo">
        <ul id="nav-ul">
            <li class="nav-list"><a href="./index.php">Home</a></li>
            <li class="nav-list"><a href="./about-us.php">About Us</a></li>
            <li class="nav-list"><a href="./products.php">Products</a></li>
            <li class="nav-list"><a href="./services.php">Services</a></li>
            <li class="nav-list"><a href="./contact-us.php">Contact Us</a></li>
        </ul>
        <div id="btn-holder">
            <button onclick="openModal('partner')">Partner With Us</button>
        </div>
        <img id="menu-icon" src="./assets/icons/menu-icon.png" alt="Menu Icon">
        <i class="fa fa-times-circle-o" id="close-icon"></i>
    </header>
    <img id="menu-icon2" src="./assets/icons/menu-icon.png" alt="Menu Icon">

    <!-- modal -->
    <div class="modal" id="modal">
        <div class="modal-content" id="modalContent">
            <div id="formContainer">
            </div>
        </div>
    </div>

    <button id="scrollToTopBtn" title="Go to top">&#8679;</button>