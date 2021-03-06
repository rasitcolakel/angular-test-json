const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const anaDb = require("./assets/anaTablo.json");
const altDb = require("./assets/altTablo.json");
const arrays = require("./assets/arrays");
const { getRandomName } = require("./randomize");
const randomize = require("./randomize");
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
      total: req.body.rows
        ? req.body.rows
        : parseInt((arrayBody.length * 250) / (filterLength || 1)),
      data: res.data,
    });
  } else {
    res.status(200).jsonp(anaDb);
  }
});
server.post("/alt", seedAltTablo, (req, res, next) => {
  //console.log("res.data", req.body);
  if (res.data.length > 0) {
    res.status(200).jsonp({
      data: res.data,
    });
  } else {
    res.status(200).jsonp(anaDb);
  }
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
      newExample.version_user_id_qw_ = getRandomName();
      newExample.insert_user_id_qw_ = getRandomName();
      newExample.insert_dttm = randomize
        .getRandomDate(new Date(2017, 0, 1), new Date())
        .toLocaleString("tr-TR");
      newExample.version_dttm = randomize
        .getRandomDate(new Date(2017, 0, 1), new Date())
        .toLocaleString("tr-TR");
      data.push(newExample);
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
      newExample.insert_dttm = randomize
        .getRandomDate(new Date(2017, 0, 1), new Date())
        .toLocaleString("tr-TR");
      newExample.version_dttm = randomize
        .getRandomDate(new Date(2017, 0, 1), new Date())
        .toLocaleString("tr-TR");
      data.push(newExample);
    });
  }
  res.data = [...data];

  next();
}
function seedAltTablo(req, res, next) {
  const example = altDb.data[0];
  const page = req.body.page || 0;
  const rows = req.body.rows || parseInt(Math.random() * 13);
  const filterableElements = arrays.anaTablo.filter((a) => a.ref);
  let filtered = filterableElements.filter(
    (a) => req.body[a.key] !== undefined
  );
  let data = [];
  if (filtered.length > 0) {
    [...Array(rows).keys()].forEach((a) => {
      let newExample = { ...example };
      filtered.forEach((b) => {
        let newValue = arrayBody.find((c) => c.key === b.ref);
        if (!newValue) return;
        newExample[b.key] = newValue.array.find((c) => c === req.body[b.key]);
      });
      newExample["trafo_merkezi_id"] = 1000000 + page * rows + a;
      newExample.version_user_id_qw_ = getRandomName();
      newExample.insert_user_id_qw_ = getRandomName();
      newExample.salt_id = Math.floor(Math.random() * 1000000);
      newExample.lkp_salt_tip_qw_ = Math.random() > 0.5 ? "EVET" : "HAYIR";
      newExample.imal_year = parseInt(Math.random() * 5 + 2017);
      newExample.insert_dttm = randomize
        .getRandomDate(new Date(2017, 0, 1), new Date())
        .toLocaleString("tr-TR");
      newExample.version_dttm = randomize
        .getRandomDate(new Date(2017, 0, 1), new Date())
        .toLocaleString("tr-TR");
      data.push(newExample);
    });
  }
  res.data = [...data];

  next();
}
