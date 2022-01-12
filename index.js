const express = require("express");
const cors = require("cors");

require("dotenv").config();

const allMovies = require("./routes/allMovies");
const moviesById = require("./routes/moviesById");
const moviesByTitle = require("./routes/moviesByTitle");
const moviesByRuntime = require("./routes/moviesByRuntime");
const orderByYear = require("./routes/orderByYear");
const moviesByYear = require("./routes/moviesByYear");
const byQuery = require("./routes/byQuery");
const orderByTitle = require("./routes/orderByTitle");
const orderByRuntime = require("./routes/orderByRuntime");
const moviesByGenre = require("./routes/moviesByGenre");
const moviesByDirector = require("./routes/moviesByDirector");
const moviesByActor = require("./routes/moviesByActor");
const newDB = require("./routes/newDB");


const app = express();
app.use(express.json());
app.use(cors());




app.get("/",(req,res) => {
  res.send("You're in the HOME '/' ROUTE"); 

});

app.use("/movies",allMovies);

app.use("/movies/id",moviesById);
app.use("/movies/title",moviesByTitle);
app.use("/movies/runtime",moviesByRuntime);
app.use("/movies/year",moviesByYear);
app.use("/movies/genre",moviesByGenre);
app.use("/movies/director",moviesByDirector);
app.use("/movies/actor",moviesByActor);

app.use("/movies/orderbyyear",orderByYear);
app.use("/movies/orderbytitle",orderByTitle);
app.use("/movies/orderbyruntime",orderByRuntime);


app.listen(process.env.PORT, (req,res) => {
  console.log("RUNNING SERVER ON THE 5000 PORT....");
});
