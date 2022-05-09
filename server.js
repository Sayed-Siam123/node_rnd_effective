const http = require("http");
const app = require("./app");
const port = 3000;

const server = http.createServer(app);

server.listen(port,"localhost",() => {
    console.log("Serving NODE app to the "+port);
});