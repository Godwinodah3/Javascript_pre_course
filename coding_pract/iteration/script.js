// const day1 = {
//     squriel: false,
//     events: ['work', 'touch tree', 'pizza', 'runing']
// };
// // day1.wolf = false;

// // //console.log(day1.events);

// // delete day1.events;
// // console.log(day1.events);
// // console.log("evts" in day1)
// console.log(Object.keys(day1));
// console.log(Object.keys({ x: 0, y: 0, z: 0 }));


//copies array to one place or the other 
let objectA = { a: 1, b: 2, c: 3 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);


//object encode in  san array to form a multilayer ,
let journal = [
    {
        events: ['cook', 'bath', 'sleep', 'code', 'read'],
        days: ['monday', 'tuesday', 'wednessday', 'thursday', 'friday'],
    },

    {
        events: ['cook', 'bath', 'sleep', 'code', 'read'],
        days: ['monday', 'tuesday', 'wednessday', 'thursday', 'friday'],
    },


];
console.log(journal);
console.log(typeof journal);