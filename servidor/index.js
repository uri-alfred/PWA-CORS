const express = require('express');

const app = express();

const ORIGENES_ACEPTADOS = [
  'https://api.ejemplo.com',
  'http://localhost:3000', // dominio del front
]

app.use('/', async (req, res) => {
  // obtenemos el origen de donde recibimos la solicitud a este servicio
  const origin = req.header('origin')
  // valida si el origen esta dentro de los permitidos o si no tiene origen
  // puede no traer un origen cuando la petición se hace desde el mismo dominio del servidor (http://localhost:5000)
  if(ORIGENES_ACEPTADOS.includes(origin) || !origin) {
    // headers para CORS
    // dominios u origenes de donde se permiten las peticiones
    res.header('Access-Control-Allow-Origin', origin)
    // metodos http permitidos
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // encabezados http permitidos
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // si se permiten credenciales en las solicitudes
    res.header('Access-Control-Allow-Credentials', true);
  }

  const response = await fetch('https://demon-slayer-api.onrender.com/v1/')
  .then(res => res.json())
  // console.log(response)
  res.json(response);
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
