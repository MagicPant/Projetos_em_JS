const http = require("http");
const host = 'localhost';
const port = 8080;

const requestListener = function (req,res) {
	res.writeHead(200);
	res.end("Konnichiwa sekai");
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`servidor rodando em http://${host}:${port}`);
});

