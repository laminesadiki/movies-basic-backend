const router = require("express").Router();
const db = require("../db.json");

router.get("/",(req,res) => {
    const movies = [...db.movies];
    const moviesByRuntimeAsc = [...movies.sort((a,b) => +a.runtime - +b.runtime)];
    const moviesByRuntimeDesc = [...movies.sort((a,b) => +b.runtime - +a.runtime)];
       
    if(req.query.order == "desc") res.json(moviesByRuntimeDesc);
    else res.json(moviesByRuntimeAsc);
})



module.exports = router;