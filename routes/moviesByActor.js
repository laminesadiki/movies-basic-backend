const router = require("express").Router();
const db = require("../db.json");

router.get("/:actor",(req,res) => {
    const movies = [...db.movies];
    let moviesByActor = movies.filter((movie,index,arr) => movie.actors.includes(req.params.actor));
    res.json(moviesByActor);
    console.log(`${req.params.actor} Actor has ${moviesByActor.length} movies`);
});



module.exports = router;