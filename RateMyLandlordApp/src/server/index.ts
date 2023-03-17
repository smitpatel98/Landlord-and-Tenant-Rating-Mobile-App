/**
 * starting file of server code
 * it creates http server and connect to the http handler / mongodb server
 */

 import app from './src/app';

 const http = require('http').Server(app);

 const port = 3000;
 
 http.listen(port, () => {
     // start server
   console.log(`listening on port ${port}`);
 });
 