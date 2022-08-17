export class  ControladorHabitacion{

    constructor(){}

    //buscar habitaciones
    buscarHabitaciones(request,response){

        //intento Resolver la PETICION
        try{
            response.status(200).json({
                mensaje:"exito en la consulta",
                datos:["habi1","200USD","TV POR CABLE"]
            })
        }catch(error){//FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje:"FALLO  en la consulta" + error,
                datos:null
            })
        }
    }

    //buscar habitaciones por id
    buscarHabitacionPorId(request,response){
        let identificador=request.params.id
        console.log(identificador)
        try{
            response.status(200).json({
                mensaje:"exito en la consulta"+identificador,
                datos:["habi10","100USD","TV POR CABLE"]
            })
        }catch(error){//FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje:"FALLO  en la consulta" + error,
                datos:null
            })
        }
    }

    //agregar habitaciones
    agregarHabitacion(request,response){
        let cuerpo=request.body
        console.log(cuerpo)
        try{
            response.status(200).json({
                mensaje:"exito agregando la habitacion",
                datos:"NO HAY DATOS"+cuerpo
            })
        }catch(error){//FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje:"FALLO  en la consulta" + error,
                datos:null
            })
        }
    }

    //editar habitaciones
    editarHabitacion(request,response){
        try{
            response.status(200).json({
                mensaje:"exito en la consulta",
                datos:["habi1","200USD","TV POR CABLE"]
            })
        }catch(error){//FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje:"FALLO  en la consulta" + error,
                datos:null
            })
        }
    }

    //eliminar habitaciones
    eliminarHabitacion(request,response){
        try{
            response.status(200).json({
                mensaje:"exito en la consulta",
                datos:["habi1","200USD","TV POR CABLE"]
            })
        }catch(error){//FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje:"FALLO  en la consulta" + error,
                datos:null
            })
        }
    }



}