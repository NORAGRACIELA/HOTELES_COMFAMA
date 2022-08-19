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
                datos:cuerpo
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
        //recibir id como parametro 
        let id=request.params.id


        //recibir los datos con los que voy a editar (BODY)
        let datos=request.body

        try{
            response.status(200).json({
                mensaje:"exito editando la habitacion"+ id,
                datos:["habi1","200USD","TV POR CABLE"]
            })
        }catch(error){//FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje:"FALLO  en la consulta" + error,
                datos:datos
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