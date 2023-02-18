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

/*
//object data structure 

const godwin = {
    firstname: "paul",
    lastname: "anthony",
    job: "student",
    age: 2023 - 2003,
    friends: ["john", "Timothy", "Emeka"]

};

console.log godwin);

//dot notation
console.log godwin.job);


//bracket notation
console.log godwin['job']);

//using the bracket notation to literally selecct keyword in the object decleration by putting expression
const bornKey = "born";
console.log godwin['first' + bornKey]);
console.log godwin['second' + bornKey]);
console.log godwin['third' + bornKey]);


const bigFamily = prompt('my family godwin is fun firstname, lastname, job, age3');

console.log godwin[bigFamily]);


//adding element to the object via dot and bracket notation
/* godwin.location = 'kogi state'; godwin['twitter'] = 'godwinodah3';

if  godwin[bigFamily]) {
    console.log godwin[bigFamily])
} else {
    console.log('wrong choice chosee again');
}

//console.log godwin);
*/
//challneges
//console.log(`$ godwin.firstname} has $ godwin.friends.length} friend and his best of them is  $ godwin.friends[0]}`);


//OBJECT METHOD

const godwin = {
    firstname: "Dave",
    lastname: "anthony",
    job: "student",
    birthYear: 2003,
    friends: ["john", "Timothy", "Emeka"],
    hadDriversLicense: false,



    //calcage: function (birthYear) {
    //    return 2023 - birthYear;
    //}
    //[this] keyword is used to reference to an object in a function
    // calcage: function () {
    //console.log(this);
    //   return 2023 - this.birthYear;
    // }


    //using [this] keyword to save the calculated value of the age 
    calcage: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getsummary: function () {
        return `${this.firstname} is a ${this.calcage()} year old ${this.job}   ${this.hadDriversLicense ? 'a' : "no"} has drivers lincence`;
    }

};

console.log(godwin.calcage());
console.log(godwin.age);
console.log(godwin.age);
console.log(godwin.age);
//console.log(godwin['calcage'](2003));

console.log(godwin.getsummary());


//console.log(`${godwin.firstname} is a ${godwin.age} years old ${godwin.job} and he has a drivers linsence  ${godwin.hadDriversLicense}`)

//OBJECT CODING CHALLENGE 

const Mark = {
    fullName: "Mark Miller",
    height: 1.69,
    mass: 78,

    calCBMI: function () {
        this.bmi1 = this.mass / (this.height ** 2);
        return this.bmi1;
    }
}

const John = {
    fullName: "John Smith",
    height: 1.95,
    Mass: 92,
    calCBMI: function () {
        this.bmi2 = this.Mass / (this.height * this.height);
        return this.bmi2;
    }

}



console.log(Mark.calCBMI());
console.log(Mark.bmi1);
console.log(John['calCBMI']());
console.log(John.bmi2);

//console.log(`${Mark.fullName} ${Mark.calCBMI()} is higher than ${John['fullName']} ${John.calCBMI()}`);

//conditonal statement to determine whose BMI is higher
if (Mark.bmi1 > John.bmi2) {
    console.log(`${Mark.fullName} ${Mark.calCBMI()} is higher than ${John['fullName']} BMI ${John.calCBMI()}`);

} else if (John.bmi2 > Mark) {
    console.log(`${John.fullName} ${John.calCBMI()} is higher than ${Mark['fullName']} BMI ${Mark.calCBMI()}`);
}