const letters = ["a", "b", "c"];
const nums = [1,2,3];

function doubleChar(char){
	return char+char;
}

function square(n){
	return n*n;
}

const sqnums = nums.map(square);// [1,4,9]
console.log(sqnums);

const doubled = letters.map(doubleChar); // ['aa', 'bb', 'cc']
console.log(doubled);