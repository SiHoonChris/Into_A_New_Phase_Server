var express = require('express');
var router = express.Router();
const connection = require('../db/dbConn');
const mysql = require('../db/mysqlQuery');
const today = new Date();


router.get('/', function(req, res) {
  connection.query(mysql['getBalanceSheetPerYear'].query,
    [
      today.getUTCFullYear(), 
      today.getUTCFullYear()-3, 
      today.getUTCFullYear(), 
      Math.ceil((today.getUTCMonth()+1)/3)
    ],
    
    (err, rows, fields)=>{
      if(err) console.log(err);
      res.send(rows);
    });
});

module.exports = router;