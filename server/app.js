const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

// Server will always find an open port.
const port = process.env.PORT || 3001;
server.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});

// Access example.com/
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("I love HackSchool.");
});

app.get('/memes', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('*', (req, res) => {
    res.status(404).sendFile(__dirname + '/error.html');
})




/*
console.log("Excited to make memes :)");

function isEqual(x, y) {
	let arr1 = x;
	let arr2 = y;
	let index1 = 0;
	if (x.length !== y.length) {
		return false;
	}

	while (true) {
		let indexstatus = false;
		for (let i = 0; i < arr2.length; i++) {
			if (arr1[index1] == arr2[i]) {
				arr1.splice(index1, 1);
				arr2.splice(i, 1);
				index1++; 
				indexstatus = true;
				break;
			}
		}
		if (indexstatus === false) {
			return false;
		}

	return true;
	}
}

let x = [4,2,8,23,1];
let y = [2,8,23,1,4];
console.log(isEqual(x,y));
*/