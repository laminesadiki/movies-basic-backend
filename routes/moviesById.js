const router = require("express").Router();
const db = require("../db.json");

router.get("/:id",(req,res) => {
    const movie = db.movies.find(movie => movie.id == req.params.id);
    res.json(movie);
    console.log(db.movies.length);
});

router.post("/moviebyid",(req,res) => {
    const movie = db.movies.find(movie => movie.id == req.body.id);
    res.json(movie);
})



module.exports = router;