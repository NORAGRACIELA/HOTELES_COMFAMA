import expres from 'express'

//VARIABLE PARA PERSONALIZAR LAS RUTAS (ENDPOINTS) DE MIS SERVICIOS
let rutas=express.Router()


//ESCRIBO MIS RUTAS (CADA RUTA ES UN SERVICIO)
rutas.get('viajescomfama/v1/habitaciones', function (req, res) {
    res.send('Hello World')
  })
rutas.get ('viajescomfama/v1/habitacion/id', function (req, res) {
    res.send('Hello World')
  })
rutas.post('viajescomfama/v1/reserva', function (req, res) {
    res.send('Hello World')
  })
rutas.put('viajescomfama/v1/reserva/id', function (req, res) {
    res.send('Hello World')
  })
  rutas.delete('viajescomfama/v1/cancelacion/id', function (req, res) {
    res.send('Hello World')
  }

  )

