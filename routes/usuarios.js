// Importaciones
const express = require('express');
let router = express.Router();

// usuarios
let usuarios = [
    {

        Id: 1,
        Nombre: 'Christian Axel',
        ApellidoP: 'Serrano',
        ApellidoM: 'Sandoval',
        Curp: 'CSS701220912HG',
        Sexo: 'Masculino',
        EstadoCivil: 'Viudo/a'

    },
    {

        Id: 2,
        Nombre: 'Arturo',
        ApellidoP: 'Vallejo',
        ApellidoM: 'Gonzales',
        Curp: 'CSS701220912HG',
        Sexo: 'Femenino',
        EstadoCivil: 'Casado/a'

    }
];

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

    usuarios.forEach( usuario => {
        if ( usuario.Id === req.body.Id ) {
            res.send( { error: 'Ya existe el ID' } );
            return;

        }

    });

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

router.get( '/getAllUser', ( req, res ) => {
    res.send(usuarios);

});

router.get( '/getUserById/:id', ( req, res ) => {
    const id = Number(req.params.id);
    let obj = {}

    usuarios.forEach( usuario => {
        if ( usuario.Id === id ) {
            obj = usuario;

        }

    });

    res.send(obj);

});

router.put( '/updateUser', ( req, res ) => {
    let obj = req.body;

    usuarios.forEach( usuario => {
        if ( obj.Id === usuario.Id ) {
            usuario.Id = obj.Id;
            usuario.ApellidoP = obj.ApellidoP;
            usuario.ApellidoM = obj.ApellidoM;
            usuario.Curp = obj.Curp;
            usuario.Sexo = obj.Sexo;
            usuario.Nombre = obj.Nombre;
            usuario.EstadoCivil = obj.EstadoCivil;

        }

    });

    res.send(obj);

});

router.delete( '/deleteUserById/:id', ( req, res ) => {
    const id = req.params.id;

    usuarios = usuarios.filter( obj => {
        return obj.Id !== Number(id);

    });

    res.send(usuarios);

});

module.exports = router;