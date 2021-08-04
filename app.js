const express = require("express");
const app = express();

const porth= 3000

app.use(express.static('public'));

/* routers */ /* son las rutas a las vistas */
const mainRouter = require("./routes/main")
app.use("/",mainRouter);




app.listen(porth ,()=> console.log("servidor funcionando en el puerto "+ porth));

