"use script"
/*
//array and object are thr most important data structure


//creating array using literal synthax
const Friend = ["John", "Oluwatimilyin", "Emmanuel"];
console.log(Friend);

//creating array using the array and new  keyword .
const years = new Array(1991, 2004, 2020, 2023);

console.log(Friend[0]);
console.log(Friend[2]);

console.log(Friend.length);
console.log(Friend[Friend.length - 1]);

Friend[2] = "Drake";
Friend[1] = "Mathew";

console.log(Friend);

const frist_name = 'ojonuma';
const Godwin = [frist_name, 'odah', 2023 - 2003, 'student', Friend];
console.log(Godwin);

//exercise

const calage = function (birthYear) {
    return 2023 - birthYear
}

const year1 = [2003, 2004, 2005, 2006, 2007, 2008, 2009];
const age1 = calage(year1[0]);
const age2 = calage(year1[1]);
const age3 = calage(year1[year1.length - 1]);

console.log(age1, age2, age3);

const ages = [calage(year1[0]), calage(year1[1]), calage(year1[year1.length - 1])];
console.log(ages);
const ages1 = [age1, age2, age3];
console.log(ages1);
*/

//BASIC ARRAY METHODS
//using methods on array
/*

const Friend = ["John", "Oluwatimilyin", "Emmanuel"];

//add element to the end of the array 
const newlength = Friend.push('mike');
console.log(Friend);

//return the length of the arrat as the return value of push in an array
console.log(newlength);

//add element to the begininng of the array 
Friend.unshift('Agustin');
console.log(Friend);


//remove last element 
Friend.pop();
const popped = Friend.pop();
console.log(popped);
console.log(Friend);

//remove the frist elemnet from the array
Friend.shift();
console.log(Friend);

console.log(Friend.indexOf('John'));
console.log(Friend.indexOf('Philph'));

console.log(Friend.includes("John"));
console.log(Friend.includes("bob"));

if (Friend.includes("thomas")) {
    console.log('you have a friend name john');
}
*/