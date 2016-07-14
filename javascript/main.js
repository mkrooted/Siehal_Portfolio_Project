/**
 * Created by mkrooted on 11.07.2016.
 */
var currentSector = 0;

function prepareSectors(offset){
    for(var i=1;i<5;i++){
        var degrees = 90 * (i - 1) + 90*offset;
        $("#sector"+i).css({"transform": "rotate("+degrees+"deg)"});
    }
}
function rotateRight(){
    $(".circle-content").css({"transform": "rotate("+ ++currentSector*90 +"deg)"});
    console.info("CurrentSector = ", currentSector);
}
function rotateLeft(){
    $(".circle-content").css({"transform": "rotate("+ --currentSector*90 +"deg)"});
    console.info("CurrentSector = ", currentSector);
}

$(function(){
    $("#right").click(function () {
        rotateLeft();
    });
    $("#left").click(function () {
        rotateRight();
    });
});