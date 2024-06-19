import express from 'express';
import os from 'os';

process.loadEnvFile();

// Creamos una instancia
const app = express();
const host = os.networkInterfaces();
app.use(express.json());

console.log();

// Creamos un puerto para el servidor.
const PORT = process.env.PORT || 3000;

/* ------------------------------------------------------------------------------------------------*
                                                                                                   |
  app.get();    //Atendemos solicitudes de tipo GET                                                |
  app.post();   //Atendemos solicitudes de tipo POST                                               |
  app.put();    //Atendemos solicitudes de tipo PUT                                                |
  app.delete(); //Atendemos solicitudes de tipo DELETE                                             |
  app.use();    //Atendemos solicitudes de tipo (get, post, put, patch, delete)                    |
                                                                                                   |
*------------------------------------------------------------------------------------------------ */

// Necesitamos la ruta que atendemos y la funcion para procesar y responder

app.use('/', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

app.get('/', (req, res) => {
  res.status(200).json( { message: 'Respondiendo a un get en la /' } );
});

app.post('/', (req, res) => {
  res.status(200).json( { message: 'Respondiendo a un post en la /'} );
});

app.put('/', (req, res) => {
  res.status(200).json( { message: 'Respondiendo a un put en la /' } );
});

app.delete('/', (req, res) => {
  res.status(200).json( { message: 'Respondiendo a un delete en la /' } );
});


app.listen(PORT, () => {
  const { address } = host['Loopback Pseudo-Interface 1'][1];
  console.log(`Escuchando en el servidor http://${address}:${PORT}`);
});