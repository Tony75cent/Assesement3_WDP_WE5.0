/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    $(document).on("click", trasnsitionEffect);
    $(document).on("click", trasnsitionEffect2);

    $("#Btnsubmit").on("click", login);
    $("#home_Carousel").on("click", goToIndexPage);
    $("#carousel_Jumbotron").on("click", goToCarouselPage);
    $("#goToCarousel").on("click", goToCarouselPage);
    $("#goToSignIn").on("click", goToSignInPage);
    $("#goToSignInFromLandingPage").on("click", goToSignInPage);
    $("#to-top").on("mouseover", displayMessage);
    $("#footer_1").on("mouseover", displayImage2);
    $("#footer_1").on("mouseout", removeImage2);
    $("#returnToLandingPage").on("click",goToIndexPage);
    $("#goToSignInFromIndex").on("click",goToSignInPage);
    $("#returnToLandingPageFromLogout").on("click",goToIndexPage);
    $("#goToLogoutFromIndex").on("click",goToLogoutPage);
    $("#goToLogoutFromCarousel").on("click",goToLogoutPage);

    var evtTst = document.getElementById('inputEmail');

    /**  evtTst.addEventListener('mouseover', moveImage, false); **/
    evtTst.addEventListener('mouseover', displayImage, false);
    evtTst.addEventListener('mouseout', removeImage, false);

    evtTst.addEventListener('mouseout', removeImage2, false);




    function login() {
        alert("In login()");
        /**  createLocalStorage();  **/
        /** localStorage.setItem("email", "anthony.quinn@webelevate.ie"); **/
        /**  localStorage.setItem("password", "anthonyquinn"); **/
        /** Retrieve the user input  email and password from the form input fields in the index.html file
         * and assign each one a reference,$email and  $password respectively **/
        var $inputEmail = $("#inputEmail").html();
        console.log($inputEmail);
        $("")
        var $inputPassword = $("#inputPassword").html();
        var $storedusername = "anthonyquinn@webelevate.ie";
        var $storedpassword = "letmein";
        /** $storedemail = localStorage.getItem("email"); 
         $("#loginerror").text(localStorage.getItem("email"));
         $storedpassword = localStorage.getItem("password");
         
         **/
        if ($inputEmail == $storedusername) {
            alert("B_testing@16:16");


            window.location = "/Assesement3_WDP_WE5/menu.html";

        } else {
            alert("C_testing@16:18");

            window.location = "/Assesement3_WDP_WE5/error.html";
            alert("D_testing@16:18");





        }






    }
    function createLocalStorage() {
        // Check browser support
        if (typeof (Storage) !== "undefined") {
            // Store
            localStorage.setItem("email", "anthony.quinn@webelevate.ie");
            localStorage.setItem("password", "anthonyquinn");
            // Retrieve
        } else {
            $('#loginerror').text("Sorry, your browser does not support Web Storage...");
        }

    }
    ;
    function login2() {
        var username = $("#inputEmail").text();
        var password = $("inputPassword").text();
        /**    var username = document.getElementById(this.id + "-username").value; **/
        /** var password = document.getElementById(this.id + "-password").value; **/
        this.http.open("get", this.action, false, username, password);
        this.http.send("");
        if (http.status == 200) {
            document.location = "menu.html";
        } else {
            alert("Incorrect username and/or password.");
        }
        return false;




    }
    function goToIndexPage() {
        window.location.href = "/Assesement3_WDP_WE5/index.html";

    }
    function goToCarouselPage() {
        window.location.href = "/Assesement3_WDP_WE5/carousel.html";

    }
    
    function goToLogoutPage() {
        window.location.href = "/Assesement3_WDP_WE5/logout.html";

    }
    function goToSignInPage(){
                window.location.href = "/Assesement3_WDP_WE5/signin.html";

    }

    function trasnsitionEffect() {
        $(".footer").animate({height: "200px"});


    }
    function trasnsitionEffect2() {
        $(".footer").animate({height: "70px"});


    }
    function moveImage() {
        $(".movingImage").animate({left: '250px'});


    }

    function displayMessage(evt) {

        var div = document.createElement("div");
        div.innerHTML = "Click on this and it will return the screen to the top of the page";
        /**  div.innerHTML("Click on this and it will return the screen to the top of the page"); **/
        document.appendChild(div);
        var div2 = document.getElementById('msg');
        div2.appendChild(div);

    }
    ;



    function displayImage(evt) {

        var img = document.createElement("img");
        img.setAttribute("class", "movingImage");
        img.setAttribute("src", "Images/message.PNG");
        img.setAttribute("width", "200");
        img.setAttribute("alt", "somethings wrong, press the F12 key and investigate");
        var div = document.getElementById('msg');
        div.appendChild(img);

    }
    function removeImage(evt) {
        var div = document.getElementById('msg');
        div.removeChild(div.lastChild);

    }
    function displayImage2(evt) {

        var img = document.createElement("img");
        /**   img.setAttribute("class", "movingImage");  **/
        img.setAttribute("src", "Images/Re-size_the_div.PNG");
        img.setAttribute("width", "200");
        img.setAttribute("alt", "somethings wrong, press the F12 key and investigate");
        var div = document.getElementById('msg2');
        div.appendChild(img);

    }
    function removeImage2(evt) {
        var div = document.getElementById('msg2');
        div.removeChild(div.lastChild);

    }



});
