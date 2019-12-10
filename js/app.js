
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

// function lilrock(payload) {
//     let avatar = alert("Choose who you are! (your type of rock)");
//     console.log('Choosing avatar');
//     ans = prompt(payload(character.type[0]) + 'A for Pebble ,' + payload(character.type[1]) + 'B for Rock ,' + payload(character.type[2]) + 'C for Ruby ,' + payload(character.type[3]) + 'D for Diamond ,' + payload(character.type[4]) + 'E for Topaz ' + payload(character.type[5]) + 'And F for Petrified Gum.');

//     if (ans == 'A','a') {
//         console.log(character.type[0]);
//         // document.write('You are a Pebble. You are sweet and tiny. So cute!');
//         alert('You are a Pebble. You are sweet and tiny. So cute!');
//     } else if (ans == 'B','b') {
//         console.log(character.type[1]);
//         // document.write('You are a rock, just a plain \'ol rock, not that special...');
//         alert('You are a rock, just a plain \'ol rock, not that special...');
//     } else if (ans == 'C','c') {
//         console.log(character.type[2]);
//         // document.write('You are a Ruby. A beautiful red color, hard, and tough.');
//         alert('You are a Ruby. A beautiful red color, hard and tough.');
//     } else if (ans == 'D','d') {
//         console.log(character.type[3]);
//         // document.write('You are a Diamond. You shine brightly and colorfully! You are hard under pressure! But can still shatter so be carefull.');
//         alert('You are a Diamond. You shine brightly and colorfully! You are hard under pressure! But can still shatter so be carefull');
//     } else if (ans == 'E','e') {
//         console.log(character.type[4]);
//         // document.write('You are a Topaz. You have a nice shine, you\'re tough and do what you want!');
//         alert('You are a Topaz. You have a nice shine, you\'re tough and do what you want!');
//     } else if (ans == 'F','f') {
//         console.log(character.type[5]);
//         // document.write('You are Petrified Gum... You used to be a stick of sugar but were than chewed up, spat out and sat on a street for so long, you ended up just like those historical Petrified logs of wood you would find in a museum...');
//         alert('You are Petrified Gum... You used to be a stick of sugar but you have been chewed up, spat out and sat on a street for so long, you ended up just like those historical petrified logs of wood you would find in a museum...');
//     }
// }

// lilrock();
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
    alert('You are sitting on a hill and a bird flying in the air sees you.')
    prompt('Do you: {A. Do nothing} or {B. Run/Roll away}?')
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
You are now sitting by a river bed. The water looks inviting but you know better than to go in because you will sink to the bottom. As you sit there staring at the water, some storm clouds gather overhead, threatening to rain. Rain never bothered you anyway, but this could be enough to flood, and you know what that means...
Do you: {A. wait to see how bad it gets} or {B. roll into the river}?
*/
function scenario2() {
    alert('You are now sitting by a river bed. The water looks inviting but you know better than to go in because you will sink to the bottom. As you sit there staring at the water, some storm clouds gather overhead, threatening to rain. Rain never bothered you anyway, but this could be enough to flood, and you know what that means...');
    prompt('Do you: A. Wait to see how bad it gets. Or B. Roll into the river?');
    // takes answer
    if (ans == 'A','a') {
        // display S2a1
        alert('You continue to sit there, staring up at the storm clouds. It soon starts to rain. As it continues raining, more water covers the ground. Eventually a nearby creek floods over and washes you away with it.');
        console.log('S2 ans1');
    } else if (ans == 'B','b') {
        // display S2a2
        alert('You roll over into the river. As you do this, you start to sink to the bottom. When you reach the bottom, you see other kinds of rocks sitting there. Along with other kinds of rocks, there are also some different items people have lost to the water. There is even a shiny gold ring. Wonder how that got there... For now, you are stuck at the bottom of the riverbed, waiting for what comes next.');
        console.log('S2 ans2');
    }
}
scenario2();
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* Scenario 3:
You are now sitting at the bottom of the river bed, along with other items, waiting for something to happen. As you sit there, you notice overhead what appears to be a boat of sorts. Not a big boat like those in the ocean, just a small row boat. How do you know its a boat? The shadow its casting, only a boat would cast that kind of shadow.
Anyway, a line is tossed into the water. It seems like whoever is in the boat is going fishing. lucky them. As you sit there while they are fishing, a fish comes near you. Normally the fish that swim in the river are all attracted to shrimpy things or bugs but this fish seems to be attracted to shiny objects... You aren't sure if its you the fish is interested in or the shiny ring next to you... but it starts swiming fast towards you!
Do you: {A. stay where you are and see what happens?} or {B. Run/swim away from the fish!}?
*/
function scenario3() {
    alert('You are now sitting at the bottom of the river bed, along with other items, waiting for something to happen. As you sit there, you notice overhead what appears to be a boad of sorts. Not a big boat like those in the ocean, just a small row boat. How do you know its a boat? The shadow its casting, only a boat would cast that kind of shadow.');
    alert('Anyway, a line is tossed into the water. It seems like whoever is in the boat is going fishing. Lucky them. As you sit there while they are fishing a fish comes near you. Normally the fish that swim in the river are all attracted to shrimpy things or bugs but this fish seems to be attracted to shiny objects... You aren\'t sure if its you the fish is interested in or the shiny ring next to you... but it starts swiming fast towards you!');
    prompt('Do you: A. Stay where you are and see what happends? or B. Run/swim away from the fish?');
    // takes answer
    if (ans == 'A','a') {
        // display S3a1
        alert('You stay where you are and the fish sees you and swallows you up, thinking you are shiny food! (If it was aiming for the ring next to you, its a stupid fish!) As you now sit inside the mouth of the fish, it just so happens that same fish gets caught by the people fishing in the river. When they open the mouth of the fish and see you in it, they take you out and throw you back in the river... You might never feel the grass again at this point.');
        alert('The end...')
        console.log('S3 ans1');
    } else if (ans == 'B','b') {
        // display S3a2
        alert('You are a rock, you can\'t run or swim! You can\'t even move! Luckily, the fish was going for a shiny lure that just so happened to be nearby. The fish got caught on the lure and was brought up to the surface while you stayed down at the bottom. Who knows how long you will be stuck down there.');
        alert('The end...');
        console.log('S3 ans2');
    }
}
scenario3();

// Reload page for new adventure once you finish
// document.write('Reload page for a new adventure once you finish!');