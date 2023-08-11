var Sequelize = require("sequelize");

var usuarioModelo = require("./models/usuarios");

require("dotenv").config();

var db = process.env.BD_MYSQL ;
var usuario = process.env.USUARIO_MYSQL ;
var password = process.env.PASSWORD_MYSQL ;
var host = process.env.HOST_MYSQL ;
var port = process.env.PORT_MYSQL ;


var conexion = new Sequelize(db, usuario, password, {
  host: host,
  port: port,
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      sslmode: "require",
      rejectUnauthorized: true,
    },
  },
}); 

conexion.sync({ force: false }) 
  .then(() => {
    console.log("Exito conectado a la base de datos");
  })
  .catch((err) => {
    console.log("Error al conectar a la base de datos" + err);
    });
    conexion.sync({ force: false }) 
    .then(()=>{
      console.log("Existo estas en localhost");
    })
    .catch((err)=>{
      console.log("Error en localhost: " + err);
    });

var Usuario = usuarioModelo(conexion);

module.exports = {
  Usuario: Usuario,
};