//LLAMAMOS A EXPRESS
//const express = require('express')// VIEJA FORMA DE IMPORTAR
import express from 'express'

//LLAMAMOS RUTAS
import{rutas} from '../routers/rutas.js'



export class Servidor{
    constructor(){
      this.app=express()//atributo una variable
      this.atenderpeticiones()//atiendo peticiones 
    }

atenderpeticiones(){
    //ATENDIENDO/ENRUTAR PETICIONES
    //this.app.get('/', )
    this.app.use('/', rutas )

}

encenderServidor(){
    //DESPERTANDO EL SERVIDOR
    this.app.listen(process.env.PORT,function(){
    console.log("servidor encedido"+process.env.PORT)
})

}

}