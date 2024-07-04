const heading = document.querySelector("#here");

const myList = ["Ari", "Haran", "Sudhan"];
// heading.innerText = myList[0] + myList[1] + myList[2];

let str = "";
for(let i=0; i<myList.length; i++){
	str += myList[i];
}

heading.innerText = str;