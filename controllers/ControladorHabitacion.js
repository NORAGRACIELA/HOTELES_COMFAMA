class  ControladorHabitacion{

    constructor(){}

    //buscar habitaciones
    buscarHabitacion(request,response){
        //intento Resolver la PETICION
        try{
            response.status(200).json({})
        }catch(error){//FALLO RESOLVIENDO LA PETICION
            response(400).json({})
        }
    }

    //buscar habitaciones por id
    buscarHabitacionPorId(request,response){
        try{
            response.status(200).json({})
        }catch(error){//FALLO RESOLVIENDO LA PETICION
            response(400).json({})
        }
    }

    //agregar habitaciones
    agregarHabitacion(request,response){
        try{
            response.status(200).json({})
        }catch(error){//FALLO RESOLVIENDO LA PETICION
            response(400).json({})
        }
    }

    //editar habitaciones
    editarHabitacion(request,response){
        try{
            response.status(200).json({})
        }catch(error){//FALLO RESOLVIENDO LA PETICION
            response(400).json({})
        }
    }

    //eliminar habitaciones
    eliminarHabitacion(request,response){
        try{
            response.status(200).json({})
        }catch(error){//FALLO RESOLVIENDO LA PETICION
            response(400).json({})
        }
    }



}