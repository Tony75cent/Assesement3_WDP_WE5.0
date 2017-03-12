/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/** Assesement3_WDP_WE5.0 **/

function login() {
    var inputEmail = document.getElementById("inputEmail").value;/** .value; **/
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
                                      alert("testing @17:06");


            if (response.trim() == "OK")/**There was a problem with the 'response', possibly hidden characters. The trim() seems to have sorted this out **/
            {
                window.location = "menu.html";

            } else {
                document.getElementById("loginerror").style.display = "block";

            }
        }
    };
    xmlhttp.open("POST", UrlToSend, true);
    xmlhttp.send();// The actual request is now being sent.
    return false;
}
