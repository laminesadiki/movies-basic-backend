const router = require("express").Router();
const db = require("../db.json");

router.get("/:year",(req,res) => {
    const movies = db.movies;
    const moviesByYear = movies.filter((value,index,arr) => value.year == req.params.year);
    res.json(moviesByYear);
    console.log(`We have ${moviesByYear.length} movies produced in ${req.params.year}`);
})

module.exports = router;