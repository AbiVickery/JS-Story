// // build your own adventure
// // at least four stages

// /*  var dr = 'The Doctor';
//     var spk = 'Sparkly Keys';
//     var dalek = 'Dalek';     */

// function choice1(data) {
//     var c1 = 'Choice1';
//     choice1 = data;
//     var c2 = 'Choice2';
//     choice2 = data;
//     if (c1 > c2) {
//         console.log("Choice 1");
//     } else {
//         console.log("Choice 2");
//     }
//     return choice2;
// }

// function choice2(data) {
//     if (c1 < c2) {
//         console.log("Choice 2");
//     } else {
//         console.log("Choice 1");
//     }
//     return choice1;
// }

// choice1();
// choice2();

// class Plantly {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
//         console.log(this.name);
//     }
// }

// var rose = new Plantly('Rose');
// var tulip =  new Plantly('Tulip');
// var mum = new Plantly('Chrysanthemum');
// var daff = new Plantly('Daffodil');
// var snap = new Plantly('Snap Dragon');
// var alg = new Plantly('Algae');
// var liv = new Plantly('Liverworts');
// var moss = new Plantly('Moss');
// var fern = new Plantly('Fern');
// var hort = new Plantly('Horsetail');

// rose.getName();
// tulip.getName();
// mum.getName();
// daff.getName();
// snap.getName();
// alg.getName();
// liv.getName();
// moss.getName();
// fern.getName();
// hort.getName();

// class Rockly {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
//         console.log(this.name);
//     }
// }

// var quart = new Rockly('Quartz');
// var coal = new Rockly('Coal');
// var jas = new Rockly('Jasper');
// var emer = new Rockly('Emerald');
// var dia = new Rockly('Diamond');
// var rutile = new Rockly('Rutile');
// var phos = new Rockly('Phosphopylite');
// var cinn = new Rockly('Cinnabar');
// var bis = new Rockly('Bismuth');

// quart.getName();
// coal.getName();
// jas.getName();
// emer.getName();
// dia.getName();
// rutile.getName();
// phos.getName();
// cinn.getName();
// bis.getName();



// Starting fresh!

// The adventures of a rock
// different rocks to choose from: {average pebble, smooth small rock (like in nice flower beds), gemstone[choose from Ruby, diamond or topaz], a rock that looks like a rock but is actually really old petrified chewed gum.}

// things the game will have:
// {rock type choice}
// {at least 4 choices moving forward}
// {3 different scenarioes}

var character = {
    // health: 'undefined',
    name: 'rock',
    type: ['Pebble', 'rock', 'Ruby', 'Diamond', 'topaz', 'Petrified gum']
}
var monster = {
    mon1 = 'A human',
    mon2 = 'A boot',
    mon3 = 'A bird',
    mon4 = 'A river'
}

function lilrock(payload) {
    let avatar = alert("Choose who you are! (your type of rock)");
    console.log('Choosing avatar');
    ans = prompt('A for Pebble ,' + payload.rock1 + 'B for Rock ,' + payload.rock2 + 'C for Ruby ,' + payload.rock3 + 'D for Diamond ,' + payload.rock4 + 'E for Topaz ' + payload.rock5 + 'And F for Petrified Gum.');

    if (ans == 'A') {
        console.log(character.type[0]);
        // document.write('You are a Pebble. You are sweet and tiny. So cute!');
        alert('You are a Pebble. You are sweet and tiny. So cute!');
    } else if (ans == 'B') {
        console.log(character.type[1]);
        // document.write('You are a rock, just a plain \'ol rock, not that special...');
        alert('You are a rock, just a plain \'ol rock, not that special...');
    } else if (ans == 'C') {
        console.log(character.type[2]);
        // document.write('You are a Ruby. A beautiful red color, hard, and tough.');
        alert('You are a Ruby. A beautiful red color, hard and tough.');
    } else if (ans == 'D') {
        console.log(character.type[3]);
        // document.write('You are a Diamond. You shine brightly and colorfully! You are hard under pressure! But can still shatter so be carefull.');
        alert('You are a Diamond. You shine brightly and colorfully! You are hard under pressure! But can still shatter so be carefull');
    } else if (ans == 'E') {
        console.log(character.type[4]);
        // document.write('You are a Topaz. You have a nice shine, you\'re tough and do what you want!');
        alert('You are a Topaz. You have a nice shine, you\'re tough and do what you want!');
    } else if (ans == 'F') {
        console.log(character.type[5]);
        // document.write('You are Petrified Gum... You used to be a stick of sugar but were than chewed up, spat out and sat on a street for so long, you ended up just like those historical Petrified logs of wood you would find in a museum...');
        alert('You are Petrified Gum... You used to be a stick of sugar but you have been chewed up, spat out and sat on a street for so long, you ended up just like those historical petrified logs of wood you would find in a museum...');
    }
}
/* Scenario 1:
 You are sitting on a hill and a bird sees you. Do you: {A. do nothing} {B. run/roll away}


 */

/* Scenario 2:

*/

/* Scenario 3:

*/