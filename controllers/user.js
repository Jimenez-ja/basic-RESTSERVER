const { response } =  require('express');

const usuariosGet = (req, res =  response) => {

    const {q, nombre, apikey} =  req.query;

    res.json({
        ok: true,
        msg: 'getAPI - controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPost = (req, res) => {

    const body = req.body;

    res.status(404).json({
        ok: true,
        msg: 'postAPI - controlador',
        body
    });
}

const usuariosPut = (req, res) => {

    const id =  req.params.id;

    res.json({
        ok: true,
        msg: 'putAPI - controlador',
        id
    });
}


const usuariosDelete = (req, res) => {
    // res.sendFile('../public/index.html');
    res.json({
        ok: true,
        msg: 'deleteAPI - controlador'
    });
}

const usuariosPatch = (req, res) => {
    // res.sendFile('../public/index.html');
    res.json({
        ok: true,
        msg: 'patchAPI - controlador'
    });
}



module.exports ={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}