import "./wall";
"use strict";



function checkParameters(numberOfRows, numberOfBricks) {
    if (!Number.isInteger(numberOfRows) || !Number.isInteger(numberOfBricks)){
        return ["Wrong Parameters",false];
    } else if (numberOfRows<0 || numberOfBricks < 0){
        return ["Wrong Parameters",false];
    }
    else if ((numberOfRows * numberOfBricks) > 10000){
        return ["Naah, too much...here's my resignation.", false];
    } else {
        return ['',true]
    }
}

function buildAWall(numberOfRows, numberOfBricks){
    var resCheck = checkParameters(numberOfRows,numberOfBricks),
        wall = "";

    if (!resCheck[1]){
        console.log(resCheck[0]);
    } else {
        var mywall = new Wall(numberOfRows, numberOfBricks);
        wall = mywall.buildWall(numberOfRows,numberOfBricks);
        console.log(wall);
    }
}

buildAWall("eight",[3]);
buildAWall(12, -4);
buildAWall(123, 987);
buildAWall(5, 5);
buildAWall(10,7);