/**
 * Created by miguelgarcia on 17/11/18.
 */

"use strict";

function writeBrick(full){
    if (full) {
        return '■■';
    } else {
        return '■'
    }
}

function writeMorter(){
    return '|'
}


function writeRow(complete, numberOfBricks){
    var count = 0,
        row ='';

    if (complete){
        while (count < numberOfBricks-1){
            row += this.writeBrick(true) + this.writeMorter()
            count++;
        }
        row += this.writeBrick(true);
    } else {
        while (count < numberOfBricks) {
            if (count == 0) {
                row += this.writeBrick(false) + this.writeMorter()
            } else {
                row += this.writeBrick(true) + this.writeMorter()
            }
            count++
        }
        row += this.writeBrick(false);
    }
    return row;
}

function writeWall(numberOfRows, numberOfBricks){
    var count = numberOfRows,
        row = "",
        wall = "";

    while (count>0){
        if (count == numberOfRows){
            row = this.writeRow(true,numberOfBricks);
        } else {
            if (((numberOfRows - count) % 2) == 0) {
                row = this.writeRow(true, numberOfBricks) + '\\n'
            } else {
                row = this.writeRow(false, numberOfBricks) + '\\n'
            }
        }
        wall = row + wall;
        count--;
    }
    return wall;
}


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
    var resCheck = this.checkParameters(numberOfRows,numberOfBricks),
        wall = "";

    if (!resCheck[1]){
        console.log(resCheck[0]);
    } else {
        wall = writeWall(numberOfRows,numberOfBricks);
        console.log(wall);
    }
}

buildAWall("eight",[3]);
buildAWall(12, -4);
buildAWall(123, 987);
buildAWall(5, 5);
buildAWall(10,7);