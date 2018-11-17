import './brick'
"use sctrict";
class Row {
    constructor(numberOfBricks) {
        this.numberOfBricks = numberOfBricks;
    }

    writeRow(self,complete){
        var count = 0, row ='';
        var myBrick = new brick();
        if (complete){
            while (count < this.numberOfBricks -1){
                row += myBrick.writeBrick() + myBrick.writeMorter();
                count++
            }
            row += myBrick.writeBrick();
        } else {
            while (count < this.numberOfBricks){
                if (count ==  0){
                    row += myBrick.writeHalfBrick() + myBrick.writeMorter()
                } else {
                    row += myBrick.writeBrick() + myBrick.writeMorter()
                }
                count++
            }
            row += myBrick.writeHalfBrick()
        }
        return row
    }
}