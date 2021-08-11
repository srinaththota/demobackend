const express= require('express')
const app = express();
const cors = require('cors');
const {server} = require('./config');


app.use(cors())

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
const routes = require('./routes');
app.use('/',routes)
app.listen(server.port, server.host, () => {
    console.log('App listening on port ', server.port);
    console.log(`Now browse to ${server.host}:${server.port}`);
  });
  
