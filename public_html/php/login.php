<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include 'usernamesAndpasswords.php';/**This is the php file in which the username(s)/passsword(s)are hard coded. 
 *                                  Including this file, has the effect of making its contents 'visible' **/
require 'functions.php';/**This file contains functions/methods either of which can be called, depending of the outcome
 *                      of the evalusation ie TRUE/FALSE
                              **/

$myusername = $_POST['username'];/** According to the php manual  php.net This vasriable is
 *                                   'An associative array of variables passed to
 *                                   the current script via the HTTP POST method 
 *                                   when using application/x-www-form-urlencoded or
 *                                   multipart/form-data as the HTTP Content-Type in the request.'
 * 
 *                                   That is to say, it is a string which is received from 
 *                                   the data input field in login.html 
 *                                   When the submit button, name =login is pressed 
 *                                   The data is sent using the HTTP POST  method to
 *                                   login.php
 *                                   A local variable $password is  then created to reference
 *                                   the $_POST['username'] The  local variable $myusername  is then 
 *                                   compared with the username values in usernamesAndpasswords.php
 *                                   **/
$password = $_POST['password'];     /** A local variable $password  is also created for  the $_POST_['password']
 *                                   which is  then compared to hardcoded 
 *                                  password values in usernamesAndpasswords.php 
 *                                  
 *                                 If the user entered username and password each evaluate to TRUE,  then the 
 *                                 overall statment is TRUE,  if either value, evaluates to FALSE then the 
 *                                 overall statment valuates to false.
 *                                 The method invoked from functionds.php 
 *                                 will depend therefore on the statement evaluastion
 *                                                     **/

if ($myusername == $username1 && $password == $password1)
{
    succesfulLogin($myusername);
}
 elseif ($myusername == $username2 && $password == $password2) 
 {
           succesfulLogin($myusername);

    {    
}
} 
 elseif ($myusername == $username3 && $password == $password3) 
{    succesfulLogin($myusername);
}
 elseif ($myusername == $username3 && $password == $password3) 
{    succesfulLogin($myusername);
}
 else {
     failedLogin();
} 
 
    



    







