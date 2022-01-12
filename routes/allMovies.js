const router = require("express").Router();
const db = require("../db.json");

router.get("/",(req,res) => {
    const movies = db.movies;
    res.json(movies);
})


module.exports = router;