const router = require("express").Router();
const db = require("../db.json");

router.get("/", (req, res) => {
  let movies = [...db.movies];
  let moviesByTitleAsc = [
    ...movies.sort((a, b) => {
      if (a.title < b.title) return -1;
      else if (a.title > b.title) return 1;
      else return 0;
    }),
  ];
  let moviesByTitleDesc = [
    ...movies.sort((a, b) => {
      if (a.title > b.title) return -1;
      else if (a.title < b.title) return 1;
      else return 0;
    }),
  ];

  if (req.query.order == "desc") res.json(moviesByTitleDesc);
  else res.json(moviesByTitleAsc);
});

module.exports = router;
