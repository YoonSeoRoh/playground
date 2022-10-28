const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults({
  static: "./build",
});

server.db = router.db;

server.use(auth);
server.use(router);
server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.listen(process.env.PORT || 4000, () => {
  console.log("server is running");
});
