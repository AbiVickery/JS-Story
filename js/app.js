
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
// var monster = {
//     mon1 = 'A human',
//     mon2 = 'A boot',
//     mon3 = 'A bird',
//     mon4 = 'A river'
// }

// var monster = {
//     monster = ['A human', 'A boot', 'A bird', 'A river']
// };

function lilrock(payload) {
    let avatar = alert("Choose who you are! (your type of rock)");
    console.log('Choosing avatar');
    ans = prompt(payload(character.type[0]) + 'A for Pebble ,' + payload(character.type[1]) + 'B for Rock ,' + payload(character.type[2]) + 'C for Ruby ,' + payload(character.type[3]) + 'D for Diamond ,' + payload(character.type[4]) + 'E for Topaz ' + payload(character.type[5]) + 'And F for Petrified Gum.');

    if (ans == 'A','a') {
        console.log(character.type[0]);
        // document.write('You are a Pebble. You are sweet and tiny. So cute!');
        alert('You are a Pebble. You are sweet and tiny. So cute!');
    } else if (ans == 'B','b') {
        console.log(character.type[1]);
        // document.write('You are a rock, just a plain \'ol rock, not that special...');
        alert('You are a rock, just a plain \'ol rock, not that special...');
    } else if (ans == 'C','c') {
        console.log(character.type[2]);
        // document.write('You are a Ruby. A beautiful red color, hard, and tough.');
        alert('You are a Ruby. A beautiful red color, hard and tough.');
    } else if (ans == 'D','d') {
        console.log(character.type[3]);
        // document.write('You are a Diamond. You shine brightly and colorfully! You are hard under pressure! But can still shatter so be carefull.');
        alert('You are a Diamond. You shine brightly and colorfully! You are hard under pressure! But can still shatter so be carefull');
    } else if (ans == 'E','e') {
        console.log(character.type[4]);
        // document.write('You are a Topaz. You have a nice shine, you\'re tough and do what you want!');
        alert('You are a Topaz. You have a nice shine, you\'re tough and do what you want!');
    } else if (ans == 'F','f') {
        console.log(character.type[5]);
        // document.write('You are Petrified Gum... You used to be a stick of sugar but were than chewed up, spat out and sat on a street for so long, you ended up just like those historical Petrified logs of wood you would find in a museum...');
        alert('You are Petrified Gum... You used to be a stick of sugar but you have been chewed up, spat out and sat on a street for so long, you ended up just like those historical petrified logs of wood you would find in a museum...');
    }
}

lilrock();
/* Scenario 1:
 You are sitting on a hill and a bird sees you. Do you: {A. do nothing} {B. run/roll away}
    if (answer == A.) {
        display S1a1
    } else if (answer == B.) {
        display S1a2
    };
    (S1a1) {
        alert('The bird sees you as just another ordinary rock (cause birds arent always all that bright) and leaves you alone.')
    }
    (S1a2) {
        alert('A light breeze blows over you and you start rolling down the long hill. The bird takes notice and flies after you. Once it catches up to you, it then swoops down and grabs you, carrying you off into the sunset, never to be seen again. Such a shame, you were a nice rock too.')
    }

 */
function scenario1() {
    alert('You are sitting on a hill and a bird flying in the air sees you. Do you: {A. Do nothing} or {B. Run/Roll away}?')
    // takes answers
    if (ans == 'A','a') {
        // display S1a1
        alert('The bird sees you as just another ordinary rock (cause birds arent always all that bright) and leaves you alone.');
        console.log('S1 ans1');
    } else if (ans == 'B','b') {
        // display S1a2
        alert('A light breeze blows over you and you start rolling down the long hill. The bird takes notice and flies after you. Once it catches up to you, it then swoops down and grabs you, carrying you off into the sunset, never to be seen again. Such a shame, you were a nice rock too.');
        console.log('S1 ans2');
    }
}
scenario1();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* Scenario 2:

*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* Scenario 3:

*/

// Reload page for new adventure once you finish
document.write('Reload page for a new adventure once you finish!');