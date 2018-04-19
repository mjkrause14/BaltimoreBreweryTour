var mysql = require('mysql');
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);
var express = require('express');
app = express();
var breweryRoutes = express.Router();
var async = require('async');

connection.query('USE ' + dbconfig.database);

breweryRoutes.route('/').get(function(req, res) {

    var brewerysql = 'SELECT * FROM breweries'
    connection.query(brewerysql, function(err, rows, results) {
        if(err) throw err;
        res.json(rows);
    });
});


breweryRoutes.route('/brewdetail/:id').get(function(req, res) {
    var id = req.params.id;
    async.parallel([
        function (callback) {
            var brewerysql = 'SELECT brewery_name FROM breweries WHERE brewery_id = ?'
            connection.query(brewerysql, [id], callback);
        },
        function (callback) {
            var beersql = 'SELECT * FROM beers WHERE brewery_name IN(SELECT brewery_name FROM breweries WHERE brewery_id = ?)'
            connection.query(beersql, [id], callback)
        }
    ], function(err, results) {
        res.json(results);
    });
});

module.exports = breweryRoutes;