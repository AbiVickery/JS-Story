// build your own adventure
// at least four stages

/*  var dr = 'The Doctor';
    var spk = 'Sparkly Keys';
    var dalek = 'Dalek';     */

function choice1(data) {
    var c1 = 'Choice1';
    choice1 = data;
    var c2 = 'Choice2';
    choice2 = data;
    if (c1 > c2) {
        console.log("Choice 1");
    } else {
        console.log("Choice 2");
    }
    return choice2;
}

function choice2(data) {
    if (c1 < c2) {
        console.log("Choice 2");
    } else {
        console.log("Choice 1");
    }
    return choice1;
}

choice1();
choice2();

class Plantly {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}

var rose = new Plantly('Rose');
var tulip =  new Plantly('Tulip');
var mum = new Plantly('Chrysanthemum');
var daff = new Plantly('Daffodil');
var snap = new Plantly('Snap Dragon');
