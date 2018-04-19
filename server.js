var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    session = require('express-session'),
    breweryRoutes = require('./src/routes/breweryRoute');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 3000;

app.use('/brewery', breweryRoutes);

const server = app.listen(port, function(){
    console.log('Listening to port' + port);
});
