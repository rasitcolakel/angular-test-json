const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const anaDb = require("./assets/anaTablo.json");
const altDb = require("./assets/altTablo.json");
const arrays = require("./assets/arrays");
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/ana", seedAnaTablo, (req, res) => {
  res.status(200).jsonp(anaDb);
});
server.post("/alt", (req, res, next) => {
  res.status(200).jsonp(altDb);
});

server.listen(process.env.PORT || 4201, () => {
  console.log("JSON Server is running", process.env.PORT || 4201);
});

function seedAnaTablo(req, res, next) {
  const example = anaDb.data[0];
  const filterableElements = arrays.anaTablo.filter((a) => a.ref);

  next();
}
