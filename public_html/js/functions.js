/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    
        $("#inputEmail").on("click", animate);

function animate(element) {
    transition.begin(element, [
        ["transform", "translateX(0)", "translateX(200px)", "1s", "ease-in-out"],
        ["background-color", "#ffffff", "#ADB5C7", "500ms", "linear"]
    ]);
}});
