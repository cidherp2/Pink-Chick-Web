const express = require("express");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection')
const routes = require('./routes');
// const { createDb } = require("./models/init");


sequelize.sync().then(()=> console.log("database is ready"))
// app.get("/pink", (req, res) =>{
//     res.send("hello!")
// })

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(routes)

app.listen(PORT,'0.0.0.0',()=>console.log(`Now listening on port:  http://localhost:${PORT}`))