const {Comentario} = require("../db");
const getClienteByEmail = require("../controllers/getClienteByEmail");
const getClaseByName = require("../controllers/getClaseByName");

const postComentario = async(email, clase, texto) =>{

    const claseSeleccionada = await getClaseByName(clase);
    const cienteSeleccionado = await getClienteByEmail(email);
    const nuevoComentario = await Comentario.create({texto});

    await nuevoComentario.setClase(claseSeleccionada);
    await nuevoComentario.setCliente(cienteSeleccionado);

    const comentario = {
        id: nuevoComentario.id,
        isBanned: nuevoComentario.isBanned,
        texto: nuevoComentario.texto,
        ClienteID: nuevoComentario.ClienteID,
        ClaseID: nuevoComentario.ClaseID,
        nombreCliente: cienteSeleccionado.nombre,
        emailCliente: cienteSeleccionado.email,
        nombreClase: claseSeleccionada.nombre

    }

    return comentario;
}

module.exports = postComentario;