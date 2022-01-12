const router = require("express").Router();
const db = require("../db.json");

router.get("/:genre",(req,res) => {
    const movies = [...db.movies];
    let moviesByGenre = movies.filter((movie,index,arr) => movie.genres.includes(req.params.genre));
    res.json(moviesByGenre);
    console.log(`We have ${moviesByGenre.length} movies in ${req.params.genre} genre`);
})


module.exports = router;