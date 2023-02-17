"use strict"
/*
const bill = [125, 555, 44];

function calcTip(bill) {
    if (bill <= 300 && bill >= 50) {
        return bill * 0.15;
    }

    else {
        return bill * 0.2;
    }
}
//console.log(calcTip(bill));

const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
//const total = [bill + tip];
const total = [tip[0] + bill[0], tip[1] + bill[1], tip[2] + bill[2]];
console.log(total);
console.log(tip);
//console.log(total);
*/


//object data structure 

const odahFamilyTree = {
    firstname: "paul",
    lastname: "anthony",
    job: "student",
    age: 2023 - 2003,
    friends: ["john", "Timothy", "Emeka"]

};

console.log(odahFamilyTree);

//dot notation
console.log(odahFamilyTree.job);


//bracket notation
console.log(odahFamilyTree['job']);

//using the bracket notation to literally selecct keyword in the object decleration by putting expression
const bornKey = "born";
console.log(odahFamilyTree['first' + bornKey]);
console.log(odahFamilyTree['second' + bornKey]);
console.log(odahFamilyTree['third' + bornKey]);


const bigFamily = prompt('my family odahFamilyTree is fun firstname, lastname, job, age3');

console.log(odahFamilyTree[bigFamily]);


//adding element to the object via dot and bracket notation
/*
odahFamilyTree.location = 'kogi state';
odahFamilyTree['twitter'] = 'godwinodah3';

if (odahFamilyTree[bigFamily]) {
    console.log(odahFamilyTree[bigFamily])
} else {
    console.log('wrong choice chosee again');
}

//console.log(odahFamilyTree);
*/
//challneges
console.log(`${odahFamilyTree.firstname} has ${odahFamilyTree.friends.length} friend and his best of them is  ${odahFamilyTree.friends[0]}`);