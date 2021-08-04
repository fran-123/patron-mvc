
const path =require("path");

module.exports={  /* cramos las rutas a nuestras vistas como metodos y las exportamos */
    about: (req,res)=> {
        return res.sendFile(path.join(__dirname,"..","views","about.html"));
    },

    home : (req,res)=> {
        return res.sendFile(path.join(__dirname,"..","views","home.html"));
    }

}