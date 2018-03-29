var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "ilab.engr.utk.edu",
  user: "xli27",
  password: "xli27@421"
});


/* GET users listing. */
router.get('/', function(req, res, next) {
   // res.send('MySQL:: Hello World!')
	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  //res.send('MySQL::Connected!');
	});

	con.query("SELECT * FROM xli27.student", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

module.exports = router;

