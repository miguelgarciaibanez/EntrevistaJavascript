"use strict";
import "./row"
class Wall{
    constructor(numberOfRows, numberOfBricks){
        this.numberOfRows = numberOfRows;
        this.numberOfBricks = numberOfBricks;
        this.myRow = new Row(numberOfBricks);
    }

    buildWall(){
        var count = this.numberOfRows, row = "", wall="";
        while (count>0){
            if (count== this.numberOfRows){
                row = this.myRow.writeRow(true);
            } else {
                if (((this.numberOfRows - count) % 2) == 0){
                    row = this.myRow.writeRow(true) + '\\n';
                } else {
                    row = this.myRow.writeRow(false) + '\\n';
                }
            }
            wall = row + wall;
            count--;
        }
        return wall;
    }
}
