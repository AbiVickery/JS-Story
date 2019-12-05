// build your own adventure
// at least four stages

// var dr = 'The Doctor';
// var spk = 'Sparkly Keys';
// var dalek = 'Dalek';

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