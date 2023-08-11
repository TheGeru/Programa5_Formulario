var express = require("express");
var path = require("path");
var session = require("express-session");
var usuariosRutas = require("./rutas/usuarios");

var app = express();

// Corrección en esta línea
app.set("view engine", "ejs");

app.use("/web", express.static(path.join(__dirname, "/web")));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "hjasjdq0weoosai12j20312930usakldjsakl",
    resave: true,
    saveUninitialized: true
}));

app.use("/", usuariosRutas);

var port = process.env.PORT || 3000; // Cambio en la variable de puerto

app.listen(port, () => {
    console.log(`servidor en http://localhost:${port}`);
});
