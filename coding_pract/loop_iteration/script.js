for (let i = 1; i <= 10; i++) {
	console.log(`lifitng weight repitation ${i}`);
}


//looping array



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
	console.log(dave[i], typeof dave[i])
	types[i] = typeof dave[i];
}

console.log(types)