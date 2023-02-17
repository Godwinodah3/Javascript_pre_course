
'use strict';
/*
//function declaration
function calage(birthYear) {
    return 2023 - birthYear;
}

const age1 = calage(2003);



//function  expression
//function is a value+

const calage2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = calage2(2003);

console.log(age1, age2)
*/

//ARROW FUNCTION
/*
const calage3 = birthYear => 2023 - birthYear;
const age3 = calage3(2003);
console.log(age3);

const power = (base, exponent) => {
    let result = 1;
    //3
    for (let count = 0; count < exponent; count++) {
        //1           2
        result *= base;
    }
    return result;
};
console.log(power(2, 3));




const addition = (sum1, sum2) => {
    let result = 1
    for (count = 0; count < sum2; count++) {
        result *= sum1;
    }
    return result;
}

console.log(addition(2, 4));
*/
/*
const retirementAge = (birthYear) => {
    const age = 2023 - birthYear;
    const retireAt = 65 - age; //65 maximum age for retirement of an individual
    return retireAt;
}
console.log(retirementAge(2003))

function retirementAge(birthYear) {
    const age = 2023 - birthYear;
    const retireAt = 65 - age;
    return retireAt;
}
console.log(retirementAge(2003));
*/
/*
const cutFoodPieces = function (fruit) {
    return fruit * 4;
}



function foodProcessor(apple, orange) {
    const apllepieces = cutFoodPieces(apple);
    const orangepieces = cutFoodPieces(orange);


    const juice = `juice with ${apllepieces} apples, ${orangepieces} oranges`;
    return juice;
}

console.log(foodProcessor(2, 3));

*//*
const calage = function (birthYear) {
    return 2024 - birthYear;
}

const retirementAge = function (birthYear, fristName) {
    const age = calage(birthYear);
    const retireAt = 65 - age; //65 maximum age for retirement of an individual

    if (retireAt > 0) {
        console.log(`${fristName} retires at  ${retireAt}`);
        return retireAt;
    } else {
        console.log(`only ${fristName} is avilable`);
        return -101;
    }
}
console.log(retirementAge(2003, "davr"));
*/