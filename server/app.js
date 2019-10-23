console.log("Excited to make memes :)");

function isEqual(x, y) {
	let temp1 = x;
	let temp2 = y;
	let temp1current = 0;
	if (x.length !== y.length) {
		return false;
	}

	while (true) {
		let indexstatus = false;
		for (let i = 0; i < temp2.length; i++) {
			if (temp1[temp1current] == temp2[i]) {
				temp1.splice(temp1current, 1);
				temp2.splice(i, 1);
				temp1current++; 
				indexstatus = true;
				break;
			}
		}
		if (indexstatus === false) {
			return false;
		}

		temp1current++;

	return true;
	}
}

let x = [1,2];
let y = [1,2,3];
console.log(isEqual(x,y));
