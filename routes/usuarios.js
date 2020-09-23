// Importaciones
const express = require('express');
let router = express.Router();

// usuarios
let usuarios = [];

// Fucniones
router.post( '/newUser', ( req, res ) => {
    let obj = {
        Id: 0,
        Nombre: '',
        ApellidoP: '',
        ApellidoM: '',
        Curp: '',
        Sexo: 'Masculino',
        EstadoCivil: 'Casado' 

    }

    // Ingerar datos al objeto
    obj.Id = req.body.Id;
    obj.ApellidoP = req.body.ApellidoP;
    obj.ApellidoM = req.body.ApellidoM;
    obj.Curp = req.body.Curp;
    obj.Sexo = req.body.Sexo;
    obj.Nombre = req.body.Nombre;
    obj.EstadoCivil = req.body.EstadoCivil;

    // Ingresar el obj al arreglo
    usuarios.push(obj);
    console.log(obj);
    res.send(obj);

});

router.get( '/gelAllUser', ( req, res ) => {
    res.send(usuarios);

});

router.get( '/getUserById/:id', ( req, res ) => {
    const id = req.params.id;
    let obj = {}

    usuarios.forEach( usuario => {
        if ( usuario.Id === id ) 
            obj = usuario;

    });

    res.send(obj);

});

router.put( '/updateUser', ( req, res ) => {
    let obj = req.body;

    usuarios.forEach( usuario => {
        if ( obj.Id === usuario.Id )
            usuario = obj;

    });

    res.send(obj);

});

router.delete( '/deleteUserById/:id', ( req, res ) => {
    const id = req.params.id;

    usuarios = usuarios.filter( obj => {
        return obj.Id !== id;

    });

    res.send(usuarios);

});

module.exports = router;