var express = require('express');
var router = express.Router();
const connection = require('../db/dbConn');
const mysql = require('../db/mysqlQuery');

router.get('/', function(req, res) {
  connection.query(mysql['getBalanceSheetPerQuarter'].query, 2023, (err, rows, fields)=>{
    if(err) console.log(err);
    res.send(rows);
  });
});

module.exports = router;