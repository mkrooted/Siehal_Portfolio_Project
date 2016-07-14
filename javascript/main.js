/**
 * Created by mkrooted on 11.07.2016.
 */
var currentSector = 0;
function rotateRight(){
    $(".circle-content").css({"transform": "rotate("+ ++currentSector*90 +"deg)"});
}
function rotateLeft(){
    $(".circle-content").css({"transform": "rotate("+ --currentSector*90 +"deg)"});
}
$(function(){
    $("#right").click(rotateLeft);
    $("#left").click(rotateRight);
});