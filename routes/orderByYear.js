const router = require("express").Router();
const db = require("../db.json");

router.get("/",(req,res) => {
    const movies = [...db.movies];
    const moviesAscYear = [...movies.sort((a,b) => +a.year - +b.year)];
    const moviesDescYear = [...movies.sort((a,b) => +b.year - +a.year)];
    if(req.query.order == "desc") res.json(moviesDescYear);
    else res.json(moviesAscYear);
    
});

router.post("/orderBy",(req,res) => {
    const movies = [...db.movies];
    const moviesAscYear = [...movies.sort((a,b) => +a.year - +b.year)];
    const moviesDescYear = [...movies.sort((a,b) => +b.year - +a.year)];
    if(req.body.orderBy === "year" && req.body.order === "ASC"){
        res.json(moviesAscYear);
    }
    else if(req.body.orderBy === "year" && req.body.order === "DESC"){
        res.json(moviesDescYear);
    }
});




module.exports = router;