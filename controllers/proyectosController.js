exports.proyectosHome = (req, res) => {
    
        res.render('index', {
                nombrePagina: 'Proyectos'
        });
}

exports.formularioProyecto = (req, res) => {
        res.render('nuevoProyecto', {
                nombrePagina: 'Nuevo Proyecto'
        })
}

exports.nuevoProyecto = (req, res) => {
        //Enviar a la conola lo que el usuario escriba
        //console.log(req.body);

        //Validar que tengamos algo en input
        const {nombre} = req.body;
        
        let errores = [];

        if(!nombre){
                errores.push({'texto': 'Agrega un nombre al Proyecto'});
        }
        
        //Si hay errores
        if(errores.length > 0){
                res.render('nuevoProyecto', {
                        nombrePagina: 'Nuevo Proyecto',
                        errores
                })
                console.log(errores)
        }
}