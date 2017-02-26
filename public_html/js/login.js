/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/** Assesement3_WDP_WE5.0 **/

function login() {
    var inputEmail = document.getElementById("inputEmail").value;
    var inputPassword = document.getElementById("inputPassword").value;
    console.log("inputEmail: " + inputEmail + " : inputPassword" +inputPassword );
    var UrlToSend = "php/login.php?inputEmail=" +inputEmail  + "&inputPassword=" +inputPassword ;
    if (window.XMLHttpRequest) {
        var xmlhttp = new XMLHttpRequest();
    } else {
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var response = xmlhttp.responseText;
            if (response == "OK") {
                window.location = "home.html";

            } else {
                document.getElementById("loginerror").style.display = "block";

            }
        }
    };
    xmlhttp.open("POST", UrlToSend, true);
    xmlhttp.send();// The actual request is now being sent.
    return false;
}
