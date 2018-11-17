class brick {
    constructor() {
        this.brick = '■■'
        this.halfbrick = '■'
        this.morter = '|'
    }

    writeBrick() {
        return this.brick;
    }

    writeHalfBrick() {
        return this.halfbrick;
    }

    writeMorter() {
        return this.morter
    }
}

/*
var justAGuy = new Person();
justAGuy.name = 'martin'; // The setter will be used automatically here.
justAGuy.sayHello(); // Will output 'Hello, my name is Martin, I have ID: id_1'
 */