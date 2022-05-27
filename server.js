const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const anaDb = require("./assets/anaTablo.json");
const altDb = require("./assets/altTablo.json");
const arrays = require("./assets/arrays");
const { getRandomName } = require("./randomize");
server.use(middlewares);
server.use(jsonServer.bodyParser);
const arrayBody = [
  {
    key: "seciliMudurluk",
    array: arrays.mudurlukArray,
  },
  {
    key: "seciliIsletme",
    array: arrays.isletmeArray,
  },
  {
    key: "seciliYukTevzi",
    array: arrays.yukTevziArray,
  },
  {
    key: "seciliTransformatorMerkezi",
    array: arrays.transformatorMerkeziArray,
  },
  {
    key: "seciliTransformatorMerkeziTipi",
    array: arrays.transformatorMerkeziTipiArray,
  },
  {
    key: "seciliMulkiyet",
    array: arrays.mulkiyetArray,
  },
  {
    key: "seciliTmIsletme",
    array: arrays.mulkiyetArray,
  },
  {
    key: "seciliIsletenFirma",
    array: arrays.isletenFirmaArray,
  },
  {
    key: "seciliIl",
    array: arrays.ilArray,
  },
  {
    key: "seciliMaksimumSalt",
    array: arrays.maksimumSaltArray,
  },
];
server.post("/ana", seedAnaTablo, (req, res) => {
  const filterLength = Object.values(req.body).reduce((a, b) => {
    if (Array.isArray(b)) {
      return a + b.length;
    }
    return a + 1;
  }, 0);

  if (res.data.length > 0) {
    res.status(200).jsonp({
      total: parseInt((arrayBody.length * 150) / (filterLength || 1)),
      data: res.data,
    });
  } else {
    res.status(200).jsonp(anaDb);
  }
});
server.post("/alt", (req, res, next) => {
  res.status(200).jsonp(altDb);
});

server.listen(process.env.PORT || 3000, () => {
  console.log("JSON Server is running", process.env.PORT || 4201);
});

function seedAnaTablo(req, res, next) {
  const example = anaDb.data[0];
  const page = req.body.page || 0;
  const rows = req.body.rows || 25;
  const filterableElements = arrays.anaTablo.filter((a) => a.ref);
  let filtered = filterableElements.filter(
    (a) => req.body[a.ref] !== undefined
  );
  let data = [];
  if (filtered.length > 0) {
    [...Array(rows).keys()].forEach((a) => {
      let newExample = { ...example };
      filtered.forEach((b) => {
        let newValue = arrayBody.find((c) => c.key === b.ref);
        if (!newValue) return;
        if (Array.isArray(req.body[b.ref])) {
          newExample[b.key] =
            newValue.array[
              req.body[b.ref][
                Math.floor(Math.random() * req.body[b.ref].length)
              ]
            ];
        } else {
          newExample[b.key] = newValue.array[req.body[b.ref]];
        }
      });
      newExample["trafo_merkezi_id"] = 1000000 + page * rows + a;
      data.push(newExample);
    });
  } else {
    filtered = [...filterableElements];
    [...Array(rows).keys()].forEach((a) => {
      let newExample = { ...example };
      filtered.forEach((b) => {
        let newValue = arrayBody.find((c) => c.key === b.ref);
        if (!newValue) return;
        newExample[b.key] =
          newValue.array[Math.floor(Math.random() * newValue.array.length)];
      });
      newExample["trafo_merkezi_id"] = 1000000 + page * rows + a;
      newExample.lkp_tm_scada_durum = Math.random() > 0.5 ? "EVET" : "HAYIR";
      newExample.version_user_id_qw_ = getRandomName();
      newExample.insert_user_id_qw_ = getRandomName();
      data.push(newExample);
    });
  }
  res.data = [...data];

  next();
}
