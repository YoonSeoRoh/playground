const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

server.db = router.db;

server.use(auth);
server.use(router);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

server.listen(process.env.PORT || 4000, () => {
  console.log("server is running");
});
