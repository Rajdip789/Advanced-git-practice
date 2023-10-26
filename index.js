const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
	const rstream = fs.createReadStream('input.mp4');  
	rstream.pipe(res);
});

server.listen(8080);