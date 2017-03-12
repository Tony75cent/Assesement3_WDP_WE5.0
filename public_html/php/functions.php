<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function succesfulLogin($argX){
        session_start();
            $_SESSION['username'] = $argX;/**When  the result of the evaluation in if...iofElse statment
                                            *  in  login.php is TRUE  the user defined function,
                                            *  succesfulLogin($argX) is called.
                                             The actual argument $myusername ,($argX is the formal argument ) is 
                                            * passed it is used in the creation of the session
                                            *  variable $_SESSION['username']
                                            * The session variable is a means of storing data in variables 
                                            * which is acccesible, as required in various pages of the php application.
                                            * The session variable can  also be used to  secure the various pages from
                                            *  unauthorized users attempting to gain entry 
                                            **/


    header('Location:/Assesement3_WDP_WE5.0/menu.html');/**As the user entered details have matched
                                                                      *  the hardcoded data  in 
                                                                      * usernamesAndpasswords.php the 'flow' is redirected 
                                                                      *  the loginSuccess.php page**/
}

function failedLogin(){ /**As the user entered detais have not matched  any of the hardcoded uisername/password  pairs
                         * in usernameAndpasswords.php, the evaluation in login.php has returned FALSE and 
                         * the user defined function  failedLogin() method has been invoked
                         *  Using  a session variable here  would be inapprobriate 
                         * and the 'flow 'is re-directed to loginFailure.php  **/
    header('Location:/Assesement3_WDP_WE5.0/index.html'); 

}
