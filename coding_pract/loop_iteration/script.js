for (let i = 1; i <= 10; i++) {
	console.log(`lifitng weight repitation ${i}`);
}





//looping Array
const dave = [
	'dave',

	'Odah',
	2023 - 2003,
	'student',
	['john', 'oluwatemi', 'Emmanuel'],
	true,
	false
];
const types = [];

for (let i = 0; i < dave.length; i++) {
	//filling dave array
	console.log(dave[i], typeof dave[i])

	//filling types of array
	types[i] = typeof dave[i];
	types.push(typeof dave[i]);
}

console.log(types);

const years = [1999, 2003, 2005, 2004];
const ages = [];

for (let i = 0; i < years.length; i++) {
	2023 - years[i];
	ages.push(2023 - years[i]);
}
console.log(ages);

//continue and break statement


//continue
console.log(`......-------......only_strings......`);
for (let i = 0; i < dave.length; i++) {
	if (typeof dave[i] !== 'boolean') continue;

	console.log(dave[i], typeof dave[i])

}


//break
console.log(`......-------......break with number statement......`);
for (let i = 0; i < dave.length; i++) {
	if (typeof dave[i] === 'number') break;

	console.log(dave[i], typeof dave[i])

}




lop