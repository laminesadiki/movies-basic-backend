const router = require("express").Router();
const db = require("../db.json");

router.get("/:runtime",(req,res) => {
    const moviesByRuntime = db.movies.filter(movie => movie.runtime == req.params.runtime);
    res.json(moviesByRuntime);
    console.log(`We found ${moviesByRuntime.length} movies with ${req.params.runtime} min `);
});

router.post("/",(req,res) => {
    const moviesByRuntime = db.movies.filter(movie => +movie.runtime >= +req.body.min && +movie.runtime <= +req.body.max);
    res.json(moviesByRuntime);
    console.log(`We found ${moviesByRuntime.length} movies with [${req.body.min}min,${req.body.max}min] duration`);
})

module.exports = router;