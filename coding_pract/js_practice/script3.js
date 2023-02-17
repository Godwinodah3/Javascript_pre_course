'use strict'
/*function greet(a, b) {
    if (b === undefined) return a;
    else a + b;
}
console.log(greet(8 + 6));
*/

/*
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);

    }
}

console.log
*/
/*
function printAnimalInventory(cows, dogs) {
    let cowstring = String(cows);
    while (cowstring.length < 3) {
        cowstring = "0" + cowstring;
    }
    console.log(`${cowstring} dogs`);
    let dogstring = String(dogs);
    while (dogstring.length < 3) {
        dogstring = "0" + dogstring
    }
    console.log(`${dogstring} dogs`);
}
printAnimalInventory(6, 777);
*/
/*

function zeropadded(number, label) {
    let numberstring = String(number);

    while (numberstring.length < 3) {
        numberstring = "0" + numberstring;
    }
    console.log(`${numberstring} ${label}`);

}
function farminvectory(dogs, goats, fish) {
    zeropadded(dogs, "dogs");
    zeropadded(goats, "goats");
    zeropadded(fish, "fishs");
}

farminvectory(3, 5, 5);
*/
/*

function zeropad(number, width) {
    let numstring = String(number);
    while (numstring.length < width) {
        numstring = "0" + numstring;
    }
    return numstring;
}
function printAnimalInventory(goats, hens, pigs) {
    console.log(`${zeropad(goats, 3)} goats`);
    console.log(`${zeropad(hens, 3)} hens`);
    console.log(`${zeropad(pigs, 3)} pigs`);
}

printAnimalInventory(8, 8, 9);
*/


function min_num(a, b) {
    if (a === b) {
        return -1;
    } else if (b < a) {
        return b;
    } else {
        return a;
    }
}
console.log(min_num(1, 4));