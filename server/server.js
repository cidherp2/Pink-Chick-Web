const express = require("express");
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
app.use(express.urlencoded({ extended: true }));
app.use(routes)

app.listen(PORT,()=>console.log(`Now listening on port:  http://localhost:${PORT}`))