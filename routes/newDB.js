const router = require("express").Router();
const db = require("../db.json");

router.get("/db",(req,res) => {
    let movies = [...db.movies];
    for(let movie of movies){
        movie.director = movie.director.split(",").map(el => el.trim());
        movie.actors = movie.actors.split(",").map(el => el.trim());
    }

    res.json(movies);
    console.log("new DB is done");

})


module.exports = router;