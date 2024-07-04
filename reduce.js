const list = [1,2,3,4];

function multiply(start, n){
	return start*n;
}

const res = list.reduce(multiply);
alert(res);