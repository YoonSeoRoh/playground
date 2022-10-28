const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("./data.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(auth);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(router);

server.listen(port, () => {
  console.log("server is running");
});
