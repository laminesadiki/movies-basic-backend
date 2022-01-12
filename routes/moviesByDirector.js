const router = require("express").Router();
const db = require("../db.json");

router.get("/:director",(req,res) => {
    const movies = [...db.movies];
    let moviesByDirector = movies.filter((movie,index,arr) => movie.director.includes(req.params.director));
    res.json(moviesByDirector);
    console.log(`${req.params.director} Director have ${moviesByDirector.length} movies`);
});



module.exports = router;