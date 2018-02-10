const jsonServer = require("json-server");

// Returns an Express server
const server = jsonServer.create();

server.use(jsonServer.defaults());

const router = jsonServer.router("db.json");
server.use(router);

4onsole.log("Listening at 3000");
server.listen(3000);
