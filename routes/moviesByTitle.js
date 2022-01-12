const router = require("express").Router();
const db = require("../db.json");

router.get("/:title",(req,res) => {
    const moviesByTitle = db.movies.filter(movie => movie.title.includes(req.params.title));
    res.json(moviesByTitle);
    console.log(`We found ${moviesByTitle.length} movies including "${req.params.title}" title`);
});


module.exports = router;